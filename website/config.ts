import {resolve} from 'path'

export const config = {
  data: {
    read: {
      path: resolve(__dirname, process.env.DATA_READ_PATH ?? 'data'),
    },
    write: {
      path: resolve(__dirname, process.env.DATA_WRITE_PATH ?? 'data'),
    },
  },
  features: {
    posts: process.env.FEATURE_POSTS === '1',
  },
  ga: {
    trackingId: process.env.GA_TRACKING_ID,
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  sanity: {
    projectId: 'vn4xi6fk',
    dataset: 'production',
  },
  site: {
    staticBasePath: '/static',
    description:
      'I’m a designer and visual storyteller working mainly with digital product design, web technology, art direction and branding.',
  },
}
