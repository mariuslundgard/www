import type {RuntimeConfig, RuntimeRequest} from './types'

interface RuntimeConfigSpec {
  build?: {outDir?: string}
  paths: string[]
  server: (req: RuntimeRequest) => Promise<string>
}

export function defineConfig(spec: RuntimeConfigSpec): RuntimeConfig {
  return {
    paths: spec.paths,
    server: spec.server,
  }
}
