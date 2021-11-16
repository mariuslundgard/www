import fs from 'fs'
import path from 'path'
import oniguruma from 'vscode-oniguruma'
import vsctm from 'vscode-textmate'
import {grammars} from './grammars'

const ONIG_PATH = path.dirname(path.dirname(require.resolve('vscode-oniguruma')))
const ONIG_WASM_PATH = path.resolve(ONIG_PATH, 'release/onig.wasm')
const WASM_BIN = fs.readFileSync(ONIG_WASM_PATH).buffer

const vscodeOnigurumaLib = oniguruma.loadWASM(WASM_BIN).then(() => {
  return {
    createOnigScanner(patterns: string[]) {
      return new oniguruma.OnigScanner(patterns)
    },
    createOnigString(s: string) {
      return new oniguruma.OnigString(s)
    },
  }
})

// Create a registry that can create a grammar from a scope name.
const registry = new vsctm.Registry({
  onigLib: vscodeOnigurumaLib,
  loadGrammar: async (scopeName) => {
    const [, ext] = scopeName.split('.')

    const grammar = grammars[ext]

    if (grammar) {
      return vsctm.parseRawGrammar(grammar)
    }

    return null
  },
})

export async function highlight(ext: string, text: string[]): Promise<vsctm.IToken[][]> {
  // Load the JavaScript grammar and any other grammars included by it async.
  const grammar = await registry.loadGrammar('source.' + ext)

  if (!grammar) {
    throw new Error('missing grammar')
  }

  let ruleStack = vsctm.INITIAL

  const lines = []

  for (let i = 0; i < text.length; i++) {
    const line = text[i]
    const lineTokens = grammar.tokenizeLine(line, ruleStack)

    lines.push(lineTokens.tokens)

    ruleStack = lineTokens.ruleStack
  }

  return lines
}
