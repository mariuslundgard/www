import type {RuntimeConfig, RuntimeRequest} from './types'

interface RuntimeConfigSpec {
  build?: {outDir?: string}
  paths: string[]
  server: (req: RuntimeRequest) => Promise<string>
}

export function defineConfig(
  spec: RuntimeConfigSpec | (() => Promise<RuntimeConfigSpec>)
): Promise<RuntimeConfig> {
  if (typeof spec === 'function') {
    return spec()
  }

  return Promise.resolve({
    paths: spec.paths,
    server: spec.server,
  })
}
