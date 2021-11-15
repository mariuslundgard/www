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
      color: `${hues.purple[400].hex} !important`,
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
      padding={4}
      paddingBottom={[5, 6, 7]}
      palette="brand"
      scheme="dark"
      sizing="border-box"
      tone="default"
    >
      <Wrapper>
        <Box columns={1} gap={[2, 2, 3]} layout="grid" marginBottom={[5, 6, 7]}>
          <Text size={[1, 1, 2]} style={{fontWeight: 600}}>
            Marius Lundgård
          </Text>
          <Text size={[1, 1, 2]}>Designer / Design Technologist</Text>
        </Box>

        <Box gap={4} layout="grid" marginY={5}>
          <BlockContent value={content} />
        </Box>

        {config.features.posts && (
          <>
            <Box marginTop={[5, 6, 7]} style={{borderTop: '1px solid var(--body-border)'}} />

            <Box marginBottom={[5, 6, 7]} marginTop={3}>
              <Text size={[1, 1, 2]}>Texts</Text>
            </Box>

            <Box columns={1} gap={5} layout="grid">
              {data.posts.map((p) => (
                <Box key={p.slug} gap={[2, 2, 3]} layout="grid">
                  <Text size={[1, 1, 2]} style={{fontWeight: 600}}>
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
