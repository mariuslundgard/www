import {client} from '../sanity'
import type {DataStore} from './types'

export function createSanityStore(): DataStore {
  async function findIndex() {
    return client.fetch(`{
      "config": *[_type == "config" && _id == "config"]{
        frontPage,
      }[0],
      "posts": *[_type == "post" && defined(slug)] {
        title,
        "slug": slug.current,
        published,
      },
    }`)
  }

  async function findPost(slug: string) {
    return client.fetch(
      `*[_type == "post" && slug.current == $slug] {
        title,
        "slug": slug.current,
        published,
        body
      }[0]`,
      {slug}
    )
  }

  async function findPosts() {
    return client.fetch(`*[_type == "post" && defined(slug)] {
      title,
      "slug": slug.current,
      published,
      body
    }`)
  }

  return {findIndex, findPost, findPosts}
}
