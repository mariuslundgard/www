import {defineConfig} from '@mariuslundgard/runtime'
import {config} from './config'
import {server} from './server'

const postPaths = ['/post/hello-world']

export default defineConfig({
  build: {
    outDir: 'public',
  },
  paths: ['/'].concat(config.features.posts ? postPaths : []),
  server,
})
