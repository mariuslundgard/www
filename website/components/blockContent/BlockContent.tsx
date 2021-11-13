import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import BlockContentToReact from '@sanity/block-content-to-react'
import React from 'react'

const serializers = {
  listItem: ListItem,
  marks: {
    link: Link,
  },
  types: {
    block: Block,
  },
}

function Link(props: any) {
  const {href, target} = props.mark

  let rel: string | undefined = undefined

  if (target === '_blank') {
    rel = 'noopener noreferrer'
  }

  return (
    <a href={href} rel={rel} target={target}>
      {props.children}
    </a>
  )
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
      <Box marginY={5}>
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
    <Box marginY={5}>
      <Text size={3}>{props.children}</Text>
    </Box>
  )
}

export function BlockContent(props: {value?: any[]}) {
  const {value = []} = props

  return <BlockContentToReact blocks={value} serializers={serializers} />
}
