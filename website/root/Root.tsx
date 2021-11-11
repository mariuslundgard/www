import {ThemeProvider} from '@body-ui/core'
import React, {useMemo} from 'react'
import {HomeScreen} from '../screens/home'
import {NotFoundScreen} from '../screens/notFound/NotFoundScreen'
import {theme} from '../theme'

export function Root(props: {path: string}) {
  const {path} = props

  const screen = useMemo(() => {
    if (path === '/') return <HomeScreen />

    return <NotFoundScreen path={path} />
  }, [path])

  return <ThemeProvider theme={theme}>{screen}</ThemeProvider>
}
