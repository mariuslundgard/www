export interface HomeRoute {
  name: 'home'
  data: any
}

export interface PostRoute {
  name: 'post'
  slug: string
  data: any
}

export interface NotFoundRoute {
  name: 'notFound'
}

export type Route = HomeRoute | PostRoute | NotFoundRoute
