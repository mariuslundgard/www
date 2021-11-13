import {ThemeProvider} from '@body-ui/core'
import React, {useMemo} from 'react'
import {HomeScreen} from '../screens/home'
import {NotFoundScreen} from '../screens/notFound/NotFoundScreen'
import {PostScreen} from '../screens/post'
import {theme} from '../theme'
import type {Route} from '../types'

export function Root(props: {route: Route}) {
  const {route} = props

  const screen = useMemo(() => {
    if (route.name === 'home') return <HomeScreen data={route.data} />
    if (route.name === 'post') return <PostScreen data={route.data} />

    return <NotFoundScreen />
  }, [route])

  return <ThemeProvider theme={theme}>{screen}</ThemeProvider>
}
