import {hues} from '@body-ui/color'
import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {format} from 'date-fns'
import React from 'react'
import {BlockContent} from '../../components/blockContent'
import {config} from '../../config'

const Root = styled(Box)({
  $debugName: 'home-screen',

  minHeight: '100%',

  $nest: {
    '& a': {
      textDecoration: 'none',
      color: `${hues.blue[200].hex} !important`,
    },

    '@media(hover: hover)': {
      $nest: {
        '& a:hover': {
          borderBottom: '1px solid currentColor',
        },
      },
    },
  },
})

const Wrapper = styled(Box)({
  maxWidth: '400px',
})

export function HomeScreen(props: {
  data: {
    config?: {frontPage?: {content?: any[]}}
    posts: {slug: string; title: string; published: string}[]
  }
}) {
  const {data} = props
  const content = data?.config?.frontPage?.content

  return (
    <Root
      paddingX={4}
      paddingY={5}
      palette="brand"
      scheme="dark"
      sizing="border-box"
      tone="default"
    >
      <Wrapper>
        <Box palette="accent" style={{borderTop: '1px solid var(--body-border)'}} />

        <Box columns={1} gap={[2, 2, 3]} layout="grid" paddingTop={3} marginBottom={3}>
          <Text size={[1, 1, 2]}>Marius Lundgård</Text>
          <Text size={[1, 1, 2]}>Designer / Design Technologist</Text>
        </Box>

        <Box gap={4} layout="grid" marginY={5}>
          <BlockContent value={content} />
        </Box>

        {config.features.posts && (
          <>
            <Box
              paddingTop={3}
              palette="accent"
              style={{borderTop: '1px solid var(--body-border)'}}
            />

            <Box columns={1} gap={5} layout="grid">
              <Text size={[1, 1, 2]}>Texts</Text>

              {data.posts.map((p) => (
                <Box key={p.slug} gap={[3, 3, 4]} layout="grid">
                  <Text size={[3, 3, 4]} style={{fontWeight: 500}}>
                    <a href={`/post/${p.slug}`}>{p.title}</a>
                  </Text>

                  <Text size={[1, 1, 2]}>{format(Date.parse(p.published), 'MMM d, yyyy')}</Text>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Wrapper>
    </Root>
  )
}
