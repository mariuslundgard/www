import {ThemeProvider} from '@body-ui/core'
import {Box, Flex} from '@body-ui/layout'
import {Text} from '@body-ui/typography'
import React from 'react'
import {theme} from '../theme'

export function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        padding={[4, 5, 6, 7, 8, 9]}
        sizing="border-box"
        scheme="dark"
        style={{boxSizing: 'border-box', minHeight: '100%'}}
      >
        <Flex direction="column" gap={[4, 5, 6, 7, 8]} style={{maxWidth: 400}}>
          <Text size={[2, 3, 4]} style={{fontWeight: 800}}>
            Marius Lundgård
          </Text>

          <Text size={[2, 3, 4]} style={{fontWeight: 500}}>
            I’m a designer and visual storyteller working mainly with digital product design, design
            systems, art direction and branding.
          </Text>

          <Text size={[2, 3, 4]} style={{fontWeight: 500}}>
            I’m a product designer at{' '}
            <a href="https://sanity.io/" rel="noopener noreferrer" target="_blank">
              Sanity.io
            </a>
            .
          </Text>

          <Text size={[2, 3, 4]} style={{fontWeight: 500}}>
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

          <Text size={[2, 3, 4]} style={{fontWeight: 500}}>
            You may reach out to me on{' '}
            <a href="https://twitter.com/mariuslundgard" rel="noopener noreferrer" target="_blank">
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
        </Flex>
      </Box>
    </ThemeProvider>
  )
}
