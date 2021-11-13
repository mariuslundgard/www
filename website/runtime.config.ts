import {defineConfig} from '@mariuslundgard/runtime'
import {config} from './config'
import {client} from './sanity'
import {server} from './server'

export default defineConfig(async () => {
  const postSlugs: string[] = config.features.posts
    ? await client.fetch('*[_type == "post" && defined(slug.current)].slug.current')
    : []

  const paths = ['/', '/404'].concat(postSlugs.map((s) => `/post/${s}`))

  return {
    build: {
      outDir: 'public',
    },
    paths,
    server,
  }
})
