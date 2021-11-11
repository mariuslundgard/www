export interface RuntimeRequest {
  path: string
}

export interface RuntimeConfig {
  build?: {outDir?: string}
  paths: string[]
  server: (req: RuntimeRequest) => Promise<string>
}
