import {Box, Container} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {format} from 'date-fns'
import React from 'react'
import {BlockContent} from '../../components/blockContent'

export function PostScreen(props: {data: any}) {
  const {data} = props

  return (
    <Box paddingX={4} paddingY={[5, 6, 7, 8]} palette="brand" scheme="dark" sizing="border-box">
      <Container>
        <Text size={[3, 3, 4]} style={{fontWeight: 500}}>
          {data.title}
        </Text>

        <Box marginTop={[3, 3, 4]}>
          <Text size={[1, 1, 2]}>{format(Date.parse(data.published), 'MMM d, yyyy')}</Text>
        </Box>

        <Box marginTop={[5, 5, 6]}>
          <BlockContent value={data.body} />
        </Box>
      </Container>
    </Box>
  )
}
