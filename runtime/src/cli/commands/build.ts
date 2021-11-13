import fs from 'fs'
import path from 'path'
import {promisify} from 'util'
import esbuild from 'esbuild'
import mkdirp from 'mkdirp'
import {nanoid} from 'nanoid'
import rimrafCallback from 'rimraf'
import {RuntimeConfig} from '../../types'
import {CmdFn} from '../types'

const rimraf = promisify(rimrafCallback)
const writeFile = promisify(fs.writeFile)

async function resolveConfig(context: {cachePath: string; cwd: string}): Promise<RuntimeConfig> {
  const {cachePath, cwd} = context
  const buildId = '.tmp_' + nanoid()

  await mkdirp(cachePath)

  const rawConfigPath = path.resolve(cwd, 'runtime.config.ts')
  const configPath = path.resolve(cachePath, `${buildId}.config.js`)

  try {
    const tsconfigPath = path.resolve(cwd, 'tsconfig.json')

    await esbuild.build({
      bundle: true,
      // define: {window: 'undefined'},
      entryPoints: [rawConfigPath],
      external: ['fs', 'path'],
      format: 'cjs',
      platform: 'node',
      outfile: configPath,
      tsconfig: tsconfigPath,
    })

    const configMod = require(configPath)
    const configPromise: Promise<RuntimeConfig> = configMod.default ? configMod.default : configMod
    const config = await configPromise

    await rimraf(configPath)

    return config
  } catch (err) {
    await rimraf(configPath)

    throw err
  }
}

async function buildPath(
  context: {cachePath: string; cwd: string},
  config: RuntimeConfig,
  p: string
) {
  const html = await config.server({path: p})
  const relativePath = p === '/' ? 'index.html' : p.slice(1) + '.html'
  const filePath = path.resolve(context.cwd, config.build?.outDir || 'public', relativePath)
  const dirPath = path.dirname(filePath)

  await mkdirp(dirPath)
  await writeFile(filePath, html)

  console.log(p, '→', path.relative(context.cwd, filePath))
}

export const build: CmdFn = async ({cwd}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    require('dotenv-flow').config({
      node_env: 'production',
    })
  } catch (err) {
    throw err
  }

  const context = {
    cachePath: path.resolve(cwd, 'node_modules/.runtime'),
    cwd,
  }

  const config = await resolveConfig(context)

  await Promise.all(config.paths.map((p) => buildPath(context, config, p)))
}
