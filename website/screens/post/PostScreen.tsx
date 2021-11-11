import {styled} from '@body-ui/core'
import {Box, Container} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import BlockContent from '@sanity/block-content-to-react'
import {format} from 'date-fns'
import React from 'react'

const serializers = {
  listItem: ListItem,
  types: {
    block: Block,
  },
}

const ListItemRoot = styled('li')({
  $debugName: 'list-item',
  position: 'relative',
  listStyle: 'none',
})

const ListItemMarker = styled('div')({
  $debugName: 'list-item__marker',
  position: 'absolute',
  marginLeft: '-3em',
  width: '2.5em',
  textAlign: 'right',

  $nest: {
    '[data-type="bullet"] > div > & span:before': {
      content: '"•"',
    },

    '[data-type="number"] > div > & span:before': {
      content: '"0."',
    },
  },
})

function ListItem(props: any) {
  const {node} = props

  return (
    <ListItemRoot data-type={node.listItem}>
      <Box marginY={[3, 4]}>
        <ListItemMarker>
          <Text size={3}>
            <span />
          </Text>
        </ListItemMarker>
        <Box flex={1}>
          <Text size={3}>{props.children}</Text>
        </Box>
      </Box>
    </ListItemRoot>
  )
}

function Block(props: any) {
  return (
    <Box marginY={[4, 5, 6]}>
      <Text size={3}>{props.children}</Text>
    </Box>
  )
}

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
          <BlockContent blocks={data.body} serializers={serializers} />
        </Box>
      </Container>
    </Box>
  )
}
