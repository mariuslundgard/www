import createSanityClient from '@sanity/client'
import {config} from './config'

export const client = createSanityClient({
  ...config.sanity,
  apiVersion: '2021-11-01',
  useCdn: false,
})
