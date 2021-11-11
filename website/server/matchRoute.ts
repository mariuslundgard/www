import {config} from '../config'
import type {DataStore} from '../stores'
import type {Route} from '../types'

export async function matchRoute(pathStr: string, opts: {store: DataStore}): Promise<Route> {
  const {store} = opts

  if (pathStr === '/') {
    try {
      const result = await store.findIndex()

      return {name: 'home', data: result}
    } catch (err) {
      console.error(err)

      return {name: 'notFound'}
    }
  }

  const segments = pathStr.split('/').filter(Boolean)

  if (config.features.posts && segments[0] === 'post' && segments[1]) {
    try {
      const result = await store.findPost(segments[1])

      return {name: 'post', slug: segments[1], data: result}
    } catch (err) {
      console.error(err)

      return {name: 'notFound'}
    }
  }

  return {name: 'notFound'}
}
