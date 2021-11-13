import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'

export function NotFoundScreen() {
  return (
    <Box
      tone="critical"
      height="100%"
      layout="flex"
      scheme="dark"
      style={{alignItems: 'center', justifyContent: 'center'}}
    >
      <Text size={3}>Page not found</Text>
    </Box>
  )
}
