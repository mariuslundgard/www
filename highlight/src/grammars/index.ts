import {JavaScript_plist} from './JavaScript.plist'
import {TypeScript_plist} from './TypeScript.plist'
import {TypeScriptReact_plist} from './TypeScriptReact.plist'

export const grammars: Record<string, string | undefined> = {
  js: JavaScript_plist,
  ts: TypeScript_plist,
  tsx: TypeScriptReact_plist,
}
