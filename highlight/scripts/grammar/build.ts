import fs from 'fs'
import path from 'path'

const GRAMMARS_PATH = path.resolve(__dirname, '../../grammars')
const DIST_GRAMMARS_PATH = path.resolve(__dirname, '../../src/grammars')

function build(plistPath: string) {
  const buf = fs.readFileSync(path.resolve(GRAMMARS_PATH, plistPath))
  const code = [
    `// prettier-ignore`,
    `export const ${plistPath.replace(/\./g, '_')} = ${JSON.stringify(buf.toString())}`,
  ].join('\n')

  fs.writeFileSync(path.resolve(DIST_GRAMMARS_PATH, plistPath + '.ts'), code)
}

build('JavaScript.plist')
build('TypeScript.plist')
build('TypeScriptReact.plist')
