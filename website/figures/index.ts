import React, {createElement} from 'react'
import {TextAlignment} from './TextAlignment'

const figures: Record<string, React.ComponentType | undefined> = {
  textAlignment: TextAlignment,
}

export function FigureResolver(props: {name: string}) {
  const {name} = props
  const figureComponent = figures[name]

  if (figureComponent) {
    return createElement(figureComponent)
  }

  return null
}
