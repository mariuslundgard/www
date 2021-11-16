import path from 'path'
import mkdirp from 'mkdirp'
import {writeFile} from './helpers'
import {resolveConfig} from './resolveConfig'
import type {RuntimeConfig, RuntimeRequest} from './types'

export async function build(opts: {cwd: string}) {
  const {cwd} = opts
  const cachePath = path.resolve(cwd, 'node_modules/.runtime')
  const context = {cachePath, cwd}
  const config = await resolveConfig(context)

  for (const p of config.paths) {
    await buildPath(context, config, p)
  }
}

async function buildPath(
  context: {cachePath: string; cwd: string},
  config: RuntimeConfig,
  reqPath: string
) {
  const req: RuntimeRequest = {path: reqPath}
  const html = await config.server(req)
  const relativePath = req.path === '/' ? 'index.html' : req.path.slice(1) + '.html'
  const filePath = path.resolve(context.cwd, config.build?.outDir || 'public', relativePath)
  const dirPath = path.dirname(filePath)

  await mkdirp(dirPath)
  await writeFile(filePath, html)

  console.log('GET', req.path, '→', path.relative(context.cwd, filePath))
}
