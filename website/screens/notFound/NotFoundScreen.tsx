import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'

export function NotFoundScreen() {
  return (
    <Box
      fg="critical"
      height="100%"
      layout="flex"
      mode="muted"
      scheme="dark"
      style={{alignItems: 'center', justifyContent: 'center'}}
    >
      <Text size={[2, 3, 4]}>Page not found</Text>
    </Box>
  )
}
