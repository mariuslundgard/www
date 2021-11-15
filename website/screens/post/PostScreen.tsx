import {Box, Container} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {format} from 'date-fns'
import React from 'react'
import {BlockContent} from '../../components/blockContent'

export function PostScreen(props: {data: any}) {
  const {data} = props

  return (
    <Box padding={4} paddingBottom={[5, 6, 7]} palette="brand" scheme="dark" sizing="border-box">
      <Container>
        <Box columns={1} gap={[2, 2, 3]} layout="grid" marginBottom={[5, 6, 7]}>
          <Text size={[1, 1, 2]} style={{fontWeight: 600}}>
            {data.title}
          </Text>

          <Text size={[1, 1, 2]}>{format(Date.parse(data.published), 'MMM d, yyyy')}</Text>
        </Box>

        <BlockContent value={data.body} />
      </Container>
    </Box>
  )
}
