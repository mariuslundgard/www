import type {VercelRequest, VercelResponse} from '@vercel/node'
import React from 'react'
import {renderToStaticMarkup, renderToString} from 'react-dom/server'
import {getStyles} from 'typestyle'
import {ga, site} from '../config'
import {Layout, LayoutProps} from '../layout'
import {Root} from '../root'

export default (_: VercelRequest, res: VercelResponse) => {
  const layoutProps: LayoutProps = {
    staticBasePath: site.staticBasePath,
    description: site.description,
    trackingId: ga.trackingId,
  }

  const layoutHTML = renderToStaticMarkup(<Layout {...layoutProps} />)
  const rootHTML = renderToString(<Root />)
  const styles = getStyles()

  res.write(
    '<!doctype html>' +
      layoutHTML
        .replace('<div id="root"></div>', `<div id="root">${rootHTML}</div>`)
        .replace(
          '<style id="styles-target"></style>',
          `<style id="styles-target">${styles}</style>`
        )
  )
  res.end()
}
