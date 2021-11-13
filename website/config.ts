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
    description: [
      'I’m a designer who approaches code and technology as a design material. That means I ',
      'prefer prototyping using code – with real content and real functionality – over ',
      'traditional static sketching or visual prototyping tools.',
    ],
  },
}
