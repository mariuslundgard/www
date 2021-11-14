import {hues} from '@body-ui/color'
import React from 'react'
import {theme} from '../theme'
import {CommonMetaTags} from './CommonMetaTags'
import {GATags} from './GATags'

export interface DocumentProps {
  description: string
  staticBasePath?: string
  title?: string
  trackingId?: string
}

function GlobalStyle() {
  // prettier-ignore
  const __html = [
    `html,body,#root{height:100%;}`,
    `html{text-size-adjust:100%;-webkit-tap-highlight-color:transparent;}`,
    `body{`,
      `background-color:${theme.color.dark.brand?.default?.default?.enabled.bg || '#000'};`,
      `margin:0;`,
      `-webkit-font-smoothing:antialiased;`,
    `}`,
    `*::selection{`,
      `background-color:${hues.purple[500].hex};`,
      `color:#fff;`,
      `mix-blend-mode:screen;`,
    `}`,
    `*::-moz-selection{`,
      `background-color:${hues.purple[500].hex};`,
      `color:#fff;`,
      `mix-blend-mode:screen;`,
    `}`,
    `*::-webkit-selection{`,
      `background-color:${hues.purple[500].hex};`,
      `color:#fff;`,
      `mix-blend-mode:screen;`,
    `}`,
    // ,*::-moz-selection,*::-webkit-selection
  ].join('')

  return <style dangerouslySetInnerHTML={{__html}} />
}

function GlobalScript() {
  const __html = [
    `!(function(){`,
    `"use strict";`,
    `var html=document.documentElement;`,
    `html.classList.remove("no-js");`,
    `html.classList.add("js");`,
    `})();`,
  ].join('')

  return <script dangerouslySetInnerHTML={{__html}} />
}

export function Document(props: DocumentProps) {
  const {staticBasePath = '', description, title, trackingId} = props

  return (
    <html className="no-js no-online no-standalone" lang="en-US">
      <head>
        {trackingId && <GATags trackingId={trackingId} />}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || 'Marius Lundgård'}</title>
        <meta name="description" content={description} />
        <CommonMetaTags staticBasePath={staticBasePath} />
        <GlobalScript />
        <GlobalStyle />
        <style id="styles-target" />
      </head>
      <body>
        <div id="root" />
      </body>
    </html>
  )
}
