import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import BlockContentToReact from '@sanity/block-content-to-react'
import React, {createContext, useContext, useMemo} from 'react'
import {FigureResolver} from '../../figures'

const Root = styled(BlockContentToReact)<any>({
  $nest: {
    '& > :first-child': {
      marginTop: 0,
    },

    '& > :last-child': {
      marginBottom: 0,
    },
  },
})

const BlockContentContext = createContext<{size: number}>({size: 2})

function useBlockContent() {
  return useContext(BlockContentContext)
}

const serializers = {
  listItem: ListItem,
  marks: {
    link: Link,
  },
  types: {
    block: Block,
    figure: Figure,
  },
}

function Figure(props: any) {
  const value = props.node || {}
  const {size} = useBlockContent()

  return (
    <Box marginY={[size + 4, size + 4, size + 5]}>
      <Box border radius={1}>
        <FigureResolver name={value.name} />
      </Box>

      {value.caption && (
        <Box marginTop={3}>
          <BlockContent size={size - 2} value={value.caption} />
        </Box>
      )}
    </Box>
  )
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
  const {size} = useBlockContent()

  return (
    <ListItemRoot data-type={node.listItem}>
      <Box marginY={5}>
        <ListItemMarker>
          <Text size={size}>
            <span />
          </Text>
        </ListItemMarker>
        <Box flex={1}>
          <Text size={[size, size, size + 1]}>{props.children}</Text>
        </Box>
      </Box>
    </ListItemRoot>
  )
}

function Block(props: any) {
  const {size} = useBlockContent()

  return (
    <Box marginY={5}>
      <Text size={[size, size, size + 1]}>{props.children}</Text>
    </Box>
  )
}

export function BlockContent(props: {size?: number; value?: any[]}) {
  const {size = 2, value = []} = props
  const contextValue = useMemo(() => ({size}), [size])

  return (
    <BlockContentContext.Provider value={contextValue}>
      <Root blocks={value} renderContainerOnSingleChild serializers={serializers} />
    </BlockContentContext.Provider>
  )
}
