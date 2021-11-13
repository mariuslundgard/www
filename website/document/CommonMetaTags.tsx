import {black} from '@body-ui/color'
import React from 'react'
import {theme} from '../theme'

export function CommonMetaTags(props: {staticBasePath: string}) {
  const {staticBasePath} = props

  return (
    <>
      <link
        rel="Copyright"
        title="Copyright Marius Lundgård"
        href="https://mariuslundgard.com/license"
      />

      <link rel="apple-touch-icon" sizes="48x48" href={`${staticBasePath}/ml-favicon-48.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`${staticBasePath}/ml-favicon-72.png`} />
      <link rel="apple-touch-icon" sizes="96x96" href={`${staticBasePath}/ml-favicon-96.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`${staticBasePath}/ml-favicon-144.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${staticBasePath}/ml-favicon-180.png`} />
      <link rel="apple-touch-icon" sizes="192x192" href={`${staticBasePath}/ml-favicon-192.png`} />
      <link rel="apple-touch-icon" sizes="256x256" href={`${staticBasePath}/ml-favicon-256.png`} />
      <link rel="apple-touch-icon" sizes="384x384" href={`${staticBasePath}/ml-favicon-384.png`} />
      <link rel="apple-touch-icon" sizes="512x512" href={`${staticBasePath}/ml-favicon-512.png`} />
      <link rel="shortcut icon" href={`${staticBasePath}/favicon-64.png`} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${staticBasePath}/ml-favicon-16.png`}
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${staticBasePath}/ml-favicon-32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href={`${staticBasePath}/ml-favicon-48.png`}
      />
      <link rel="apple-touch-icon" sizes="57x57" href={`${staticBasePath}/ml-favicon-57.png`} />
      <link rel="apple-touch-icon" sizes="60x60" href={`${staticBasePath}/ml-favicon-60.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`${staticBasePath}/ml-favicon-72.png`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`${staticBasePath}/ml-favicon-76.png`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`${staticBasePath}/ml-favicon-114.png`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`${staticBasePath}/ml-favicon-120.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`${staticBasePath}/ml-favicon-144.png`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`${staticBasePath}/ml-favicon-152.png`} />
      <link rel="apple-touch-icon" sizes="167x167" href={`${staticBasePath}/ml-favicon-167.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${staticBasePath}/ml-favicon-180.png`} />
      <link
        rel="apple-touch-icon"
        sizes="1024x1024"
        href={`${staticBasePath}/ml-favicon-1024.png`}
      />

      <link rel="manifest" href={`${staticBasePath}/ml-manifest.json`} />
      <meta name="apple-mobile-web-app-title" content="Marius Lundgård" />
      <meta name="apple-mobile-web-app-capable" />
      <meta name="application-name" className="app-title" content="Marius Lundgård" />
      <meta
        name="theme-color"
        content={theme.color.dark.brand?.default?.default?.enabled.bg || black.hex}
      />
    </>
  )
}
