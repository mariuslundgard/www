import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import BlockContentToReact from '@sanity/block-content-to-react'
import React, {createContext, Fragment, useContext, useMemo} from 'react'
import {FigureResolver} from '../../figures'
import {Code} from '../code'

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

const TOKEN_CLASS_NAMES: Record<string, string | undefined> = {
  'constant.numeric.decimal': 'number',

  'entity.name.function': 'function',
  'entity.name.type': 'class-name',
  'entity.name.type.interface': 'class-name',
  'entity.name.tag': 'keyword',

  'keyword.control.flow': 'keyword',
  'keyword.operator.assignment': 'keyword',

  'punctuation.separator.key-value': 'keyword',

  'storage.type': 'keyword',
  'storage.type.function': 'keyword',
  'storage.type.interface': 'keyword',

  'support.class.console': 'symbol',
  'support.function.console': 'function',
  'support.type.primitive': 'class-name',

  'variable.other.constant': 'constant',
  'variable.parameter': 'class',
}

function getClassName(scopes: string[]) {
  const _scopes = scopes
    .map((s) => s.split('.').slice(0, -1).join('.'))
    .map((s) => {
      return TOKEN_CLASS_NAMES[s]
    })
    .filter(Boolean)

  if (_scopes.length === 0) return ''

  return 'token ' + _scopes.join(' ')
}

const serializers = {
  listItem: ListItem,
  marks: {
    link: Link,
  },
  types: {
    block: Block,
    code: CodeBlock,
    figure: Figure,
  },
}

function CodeBlock(props: any) {
  const {node} = props
  const {size} = useBlockContent()

  const codeLines = node.code.split('\n')

  const lines = useMemo(() => {
    const t: any[] = node.tokens

    return t.map((lineTokens: any[], lineIndex) => {
      const code = codeLines[lineIndex] || ''

      return lineTokens.map((token) => {
        return {
          start: token.startIndex,
          end: token.endIndex,
          scopes: token.scopes,
          code: code.slice(token.startIndex, token.endIndex),
        }
      })
    })
  }, [codeLines, node.tokens])

  return (
    <Box
      marginY={[size + 4, size + 4, size + 5]}
      mode="muted"
      padding={[size, size, size + 1]}
      palette="accent"
      radius={2}
      style={{overflow: 'auto'}}
      tone="default"
    >
      <Code>
        <code>
          {lines.map((lineTokens, lineIndex) => {
            return (
              <Fragment key={lineIndex}>
                {lineTokens.map((token, tokenIndex) => {
                  const cn = getClassName(token.scopes)

                  return cn ? (
                    <span className={cn} data-scopes={token.scopes.join(' ')} key={tokenIndex}>
                      {token.code}
                    </span>
                  ) : (
                    <span data-scopes={token.scopes.join(' ')} key={tokenIndex}>
                      {token.code}
                    </span>
                  )
                })}
                {'\n'}
              </Fragment>
            )
          })}
        </code>
      </Code>
    </Box>
  )
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
