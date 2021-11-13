import type {RuntimeRequest} from '@mariuslundgard/runtime'
import React from 'react'
import {renderToStaticMarkup, renderToString} from 'react-dom/server'
import {getStyles} from 'typestyle'
import {config} from '../config'
import {Document, DocumentProps} from '../document'
import {Root} from '../root'
import {createSanityStore} from '../stores'
import {matchRoute} from './matchRoute'

export async function server(req: RuntimeRequest) {
  const store = createSanityStore()

  const documentProps: DocumentProps = {
    staticBasePath: config.site.staticBasePath,
    description: config.site.description,
    trackingId: config.ga.trackingId,
  }

  const route = await matchRoute(req.path, {store})
  const documentHTML = renderToStaticMarkup(<Document {...documentProps} />)
  const rootHTML = renderToString(<Root route={route} />)
  const styles = getStyles()

  return (
    '<!doctype html>' +
    documentHTML
      .replace('<div id="root"></div>', `<div id="root">${rootHTML}</div>`)
      .replace('<style id="styles-target"></style>', `<style id="styles-target">${styles}</style>`)
  )
}
