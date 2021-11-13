import chalk from 'chalk'
import {build} from './commands/build'
import {getCLIContext} from './helpers'
import {CmdFn} from './types'

const commands: {[key: string]: CmdFn | undefined} = {
  build,
}

async function runCli() {
  const {args, cmd, cwd, flags} = await getCLIContext()

  if (!cmd) throw new Error('missing command')
  if (typeof cmd !== 'string') throw new Error('expected command to be a string')

  const cmdFn = commands[cmd]

  if (cmdFn) return cmdFn({args, cwd, flags})

  throw new Error(`unknown command: ${cmd}`)
}

runCli().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(`${chalk.red('error')} ${err.message}`)
  process.exit(1)
})
