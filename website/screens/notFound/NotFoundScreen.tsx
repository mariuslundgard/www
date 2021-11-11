import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'

export function NotFoundScreen(props: {path: string}) {
  const {path} = props

  return (
    <Box
      fg="critical"
      height="100%"
      layout="flex"
      mode="muted"
      scheme="dark"
      style={{alignItems: 'center', justifyContent: 'center'}}
    >
      <Text size={[2, 3, 4]} style={{fontWeight: 500}}>
        Not found: {path}
      </Text>
    </Box>
  )
}
