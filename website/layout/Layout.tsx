import React from 'react'
import {theme} from '../theme'
import {CommonMetaTags} from './CommonMetaTags'
import {GATags} from './GATags'

export interface LayoutProps {
  description: string
  staticBasePath?: string
  title?: string
  trackingId?: string
}

export function Layout(props: LayoutProps) {
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
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `html,body,#root{height:100%;}`,
              `html{text-size-adjust:100%;-webkit-tap-highlight-color:transparent;}`,
              `body{`,
              `background-color:${theme.color.dark.base?.default?.default?.enabled.bg || '#000'};`,
              `margin:0;`,
              `-webkit-font-smoothing:antialiased;`,
              `}`,
            ].join('\n'),
          }}
        />
        <style id="styles-target" />
        <script
          dangerouslySetInnerHTML={{
            __html: [
              `!(function(){`,
              `"use strict";`,
              `var html=document.documentElement;`,
              `html.classList.remove("no-js");`,
              `html.classList.add("js");`,
              `})();`,
            ].join('\n'),
          }}
        />
      </head>
      <body>
        <div id="root" />
      </body>
    </html>
  )
}
