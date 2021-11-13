import {styled} from '@body-ui/core'
import {Box} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import {hues} from '@sanity/color'
import {format} from 'date-fns'
import React from 'react'
import {config} from '../../config'

const Root = styled(Box)({
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

export function HomeScreen(props: {
  data: {posts: {slug: string; title: string; published: string}[]}
}) {
  const {data} = props

  return (
    <Root
      paddingX={[4, 5, 6, 7, 8]}
      paddingY={[5, 6, 7, 8, 9]}
      sizing="border-box"
      scheme="dark"
      style={{minHeight: '100%'}}
    >
      <Box
        columns={[1, 1, config.features.posts ? 2 : 1]}
        gap={[5, 6, 7]}
        layout="grid"
        style={{maxWidth: config.features.posts ? 864 : 400}}
      >
        <Box gap={[4, 5, 6]} layout="grid">
          <Text size={[3, 4, 3, 4]}>
            <strong>Marius Lundgård</strong>
          </Text>

          <Box gap={[4, 5, 6]} layout="grid" mode="muted">
            <Text size={[2, 3, 2, 3]}>
              I’m a designer and visual storyteller working mainly with digital product design,
              design systems, art direction and branding.
            </Text>

            <Text size={[2, 3, 2, 3]}>
              I’m a product designer at{' '}
              <a href="https://sanity.io/" rel="noopener noreferrer" target="_blank">
                Sanity.io
              </a>
              .
            </Text>

            <Text size={[2, 3, 2, 3]}>
              Before that I’ve worked at{' '}
              <a href="https://www.nrk.no/" rel="noopener noreferrer" target="_blank">
                NRK
              </a>
              ,{' '}
              <a href="https://www.yr.no/" rel="noopener noreferrer" target="_blank">
                Yr.no
              </a>
              ,{' '}
              <a href="https://node.international/" rel="noopener noreferrer" target="_blank">
                NODE Berlin Oslo
              </a>
              , Blast Radius,{' '}
              <a href="https://try.no/" rel="noopener noreferrer" target="_blank">
                TRY Apt
              </a>
              ,{' '}
              <a href="https://www.odopod.com/" rel="noopener noreferrer" target="_blank">
                Odopod
              </a>
              , as well as stints of independent graphic design and visual art practice.
            </Text>

            <Text size={[2, 3, 2, 3]}>
              You may reach out to me on{' '}
              <a
                href="https://twitter.com/mariuslundgard"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
              ,{' '}
              <a href="https://github.com/mariuslundgard" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              , and{' '}
              <a
                href="https://www.linkedin.com/in/mariuslundgard/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              .
            </Text>
          </Box>
        </Box>

        {config.features.posts && (
          <Box>
            <Box columns={1} gap={[4, 5, 6]} layout="grid">
              <Text size={[3, 4, 3, 4]}>
                <strong>Texts</strong>
              </Text>

              {data.posts.map((p) => (
                <Box key={p.slug} gap={[2, 3, 4]} layout="grid" mode="muted">
                  <Text size={[2, 3, 2, 3]}>
                    <strong>
                      <a href={`/post/${p.slug}`}>{p.title}</a>
                    </strong>
                  </Text>

                  <Text size={[1, 2, 1, 2]}>{format(Date.parse(p.published), 'MMM d, yyyy')}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Root>
  )
}
