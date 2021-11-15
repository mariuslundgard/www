import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'

export function NotFoundScreen() {
  return (
    <Box
      height="100%"
      layout="flex"
      palette="brand"
      scheme="dark"
      style={{alignItems: 'center', justifyContent: 'center'}}
      tone="critical"
    >
      <Box>
        <Text size={3}>Page not found</Text>
      </Box>
    </Box>
  )
}
