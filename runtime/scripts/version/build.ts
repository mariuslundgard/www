import fs from 'fs'
import path from 'path'
import pkg from '../../package.json'

const CONSTANTS_CJS_PATH = path.resolve(__dirname, '../../lib/cjs/constants.js')
const CONSTANTS_ESM_PATH = path.resolve(__dirname, '../../lib/esm/constants.js')

function setCjsVersion() {
  const rawCode = fs.readFileSync(CONSTANTS_CJS_PATH).toString()
  const code = rawCode.replace('"0.0.0"', JSON.stringify(pkg.version))

  fs.writeFileSync(CONSTANTS_CJS_PATH, code)
}

function setEsmVersion() {
  const rawCode = fs.readFileSync(CONSTANTS_ESM_PATH).toString()
  const code = rawCode.replace('"0.0.0"', JSON.stringify(pkg.version))

  fs.writeFileSync(CONSTANTS_ESM_PATH, code)
}

function setVersion() {
  setCjsVersion()
  setEsmVersion()
}

setVersion()
