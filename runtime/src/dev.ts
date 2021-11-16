import path from 'path'
import express from 'express'
import {resolveConfig} from './resolveConfig'
import type {RuntimeRequest} from './types'

export async function dev(opts: {cwd: string}) {
  const {cwd} = opts
  const cachePath = path.resolve(cwd, 'node_modules/.runtime')
  const context = {cachePath, cwd}
  const config = await resolveConfig(context)
  const server = express()

  server.get('/*', async (_req, res) => {
    const p = config.paths.find((_p) => _p === _req.path)

    if (!p) {
      res.send(`Page not found: ${_req.path}`)

      return
    }

    const req: RuntimeRequest = {path: p}
    const html = await config.server(req)

    res.send(html)
  })

  server.listen(3000, () => {
    console.log('Development server running at http://localhost:3000')
  })
}
