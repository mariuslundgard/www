import {hues} from '@body-ui/color'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'

export function TextAlignment() {
  return (
    <Box layout="flex" paddingY={6} style={{justifyContent: 'center'}}>
      <Box>
        <Box paddingTop={2} style={{backgroundColor: hues.magenta[700].hex}} tone="default" />
        <Text size={[3, 3, 4]}>Text with inherent padding</Text>
        <Box paddingTop={2} style={{backgroundColor: hues.green[700].hex}} tone="default" />
      </Box>
    </Box>
  )
}
