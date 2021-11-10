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
      <link href={`${staticBasePath}/apple-touch-icon.png`} rel="apple-touch-icon" />
      <link
        href={`${staticBasePath}/apple-touch-icon-precomposed.png`}
        rel="apple-touch-icon-precomposed"
      />
      <link
        href={`${staticBasePath}/safari-pinned-tab.svg`}
        rel="mask-icon"
        color="#${colors.black}"
      />
      <link
        href={`${staticBasePath}/android-chrome-192x192.png`}
        sizes="192x192"
        rel="icon"
        type="image/png"
      />
      <link
        href={`${staticBasePath}/favicon-96x96.png`}
        sizes="96x96"
        rel="icon"
        type="image/png"
      />
      <link
        href={`${staticBasePath}/favicon-32x32.png`}
        sizes="32x32"
        rel="icon"
        type="image/png"
      />
      <link
        href={`${staticBasePath}/favicon-16x16.png`}
        sizes="16x16"
        rel="icon"
        type="image/png"
      />
      <link rel="manifest" href={`${staticBasePath}/manifest.json`} />
      <meta name="apple-mobile-web-app-title" content="Marius Lundgård" />
      <meta name="apple-mobile-web-app-capable" />
      <meta name="application-name" className="app-title" content="Marius Lundgård" />
      <meta
        name="theme-color"
        content={theme.color.dark.base?.default?.default?.enabled.bg || '#000'}
      />
    </>
  )
}
