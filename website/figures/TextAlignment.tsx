import {hues} from '@body-ui/color'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'

export function TextAlignment() {
  return (
    <Box layout="flex" paddingX={3} paddingY={6} style={{justifyContent: 'center'}}>
      <Box>
        <Box marginBottom={[1, 1, 2]}>
          <Text size={[0, 0, 1]} style={{color: hues.magenta[500].hex, textAlign: 'right'}}>
            Ascent
          </Text>
        </Box>
        <Box
          paddingTop={2}
          style={{backgroundColor: hues.magenta[500].hex, mixBlendMode: 'screen'}}
          tone="default"
        />
        <Text size={[3, 3, 4]}>Text with inherent padding</Text>
        <Box
          paddingTop={2}
          style={{backgroundColor: hues.purple[500].hex, mixBlendMode: 'screen'}}
          tone="default"
        />
        <Box marginTop={[1, 1, 2]}>
          <Text size={[0, 0, 1]} style={{color: hues.purple[500].hex, textAlign: 'left'}}>
            Descent
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
