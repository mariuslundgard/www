import React from 'react'

export function GATags(props: {trackingId: string}) {
  const {trackingId} = props

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-64128588-1" />
      <script
        dangerouslySetInnerHTML={{
          __html: [
            `window.dataLayer = window.dataLayer || [];`,
            `function gtag() {`,
            `dataLayer.push(arguments);`,
            `}`,
            `gtag("js", new Date());`,
            `gtag("config", "${trackingId}");`,
          ].join(''),
        }}
      />
    </>
  )
}
