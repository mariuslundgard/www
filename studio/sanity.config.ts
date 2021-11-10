export default {
  root: true,
  project: {
    name: 'Marius Lundgård',
    basePath: '/studio',
  },
  api: {
    projectId: 'vn4xi6fk',
    dataset: 'production',
  },
  plugins: [
    '@sanity/base',
    '@sanity/components',
    '@sanity/default-layout',
    '@sanity/default-login',
    '@sanity/dashboard',
    '@sanity/desk-tool',
    'google-analytics',
  ],
  env: {
    development: {
      plugins: ['@sanity/vision'],
    },
  },
  parts: [
    {
      name: 'part:@sanity/base/schema',
      path: './src/schemas/schema',
    },
    {
      name: 'part:@sanity/desk-tool/structure',
      path: './src/structure',
    },
    {
      implements: 'part:@sanity/dashboard/config',
      path: './src/dashboard',
    },
    {
      implements: 'part:@sanity/base/brand-logo',
      path: './src/components/Logo',
    },
  ],
}
