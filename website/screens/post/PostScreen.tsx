import {Box, Container} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {format} from 'date-fns'
import React from 'react'
import {BlockContent} from '../../components/blockContent'

export function PostScreen(props: {data: any}) {
  const {data} = props

  return (
    <Box paddingX={[3, 4, 5, 6, 7]} paddingY={[4, 5, 6, 7, 8]} scheme="dark" sizing="border-box">
      <Container>
        <Text size={4}>
          <strong>{data.title}</strong>
        </Text>

        <Box marginTop={4} mode="muted">
          <Text size={[0, 1]}>{format(Date.parse(data.published), 'MMM d, yyyy')}</Text>
        </Box>

        <Box mode="muted" marginTop={[4, 5, 6, 7, 8]}>
          <BlockContent value={data.body} />
        </Box>
      </Container>
    </Box>
  )
}
