import {hues} from '@body-ui/color'
import {styled} from '@body-ui/core'
import {Text} from '@body-ui/typography'
import React from 'react'
// import Refractor from 'react-refractor'

// import jsx from 'refractor/lang/jsx'
// import ts from 'refractor/lang/typescript'

// Refractor.registerLanguage(jsx)
// Refractor.registerLanguage(ts)

const mainShade = 400
const secondaryShade = 700

const color: any = {
  atrule: hues.purple[mainShade].hex,
  attrName: hues.green[mainShade].hex,
  attrValue: hues.yellow[mainShade].hex,
  attribute: hues.yellow[mainShade].hex,
  boolean: hues.purple[mainShade].hex,
  builtin: hues.purple[mainShade].hex,
  cdata: hues.yellow[mainShade].hex,
  char: hues.yellow[mainShade].hex,
  class: hues.orange[mainShade].hex,
  className: hues.cyan[mainShade].hex,
  comment: hues.gray[secondaryShade].hex,
  constant: hues.purple[mainShade].hex,
  deleted: hues.red[mainShade].hex,
  doctype: hues.gray[secondaryShade].hex,
  entity: hues.red[mainShade].hex,
  function: hues.green[mainShade].hex,
  hexcode: hues.blue[mainShade].hex,
  id: hues.purple[mainShade].hex,
  important: hues.purple[mainShade].hex,
  inserted: hues.yellow[mainShade].hex,
  keyword: hues.magenta[mainShade].hex,
  number: hues.purple[mainShade].hex,
  operator: hues.magenta[mainShade].hex,
  prolog: hues.gray[secondaryShade].hex,
  property: hues.blue[mainShade].hex,
  pseudoClass: hues.yellow[mainShade].hex,
  pseudoElement: hues.yellow[mainShade].hex,
  punctuation: hues.gray[mainShade].hex,
  regex: hues.blue[mainShade].hex,
  selector: hues.red[mainShade].hex,
  string: hues.yellow[mainShade].hex,
  symbol: hues.purple[mainShade].hex,
  tag: hues.red[mainShade].hex,
  unit: hues.orange[mainShade].hex,
  url: hues.red[mainShade].hex,
  variable: hues.red[mainShade].hex,
}

const Root = styled('pre')({
  fontFamily: 'inherit',
  margin: 0,
  mixBlendMode: 'screen',
})

const CodeText = styled(Text)({
  $nest: {
    '& > code': {
      fontFamily: 'SF Mono, Menlo, monospace',
    },

    '& .token': {
      $nest: {
        '&.meta-definition-property': {color: color.property},
        '&.atrule': {color: color.atrule},
        '&.attr-name': {color: color.attrName},
        '&.attr-value': {color: color.attrValue},
        '&.attribute': {color: color.attribute},
        '&.boolean': {color: color.boolean},
        '&.builtin': {color: color.builtin},
        '&.cdata': {color: color.cdata},
        '&.char': {color: color.char},
        '&.class': {color: color.class},
        '&.class-name': {color: color.className},
        '&.comment': {color: color.comment},
        '&.constant': {color: color.constant},
        '&.deleted': {color: color.deleted},
        '&.doctype': {color: color.doctype},
        '&.entity': {color: color.entity},
        '&.function': {color: color.function},
        '&.hexcode': {color: color.hexcode},
        '&.id': {color: color.id},
        '&.important': {color: color.important},
        '&.inserted': {color: color.inserted},
        '&.keyword': {color: color.keyword},
        '&.number': {color: color.number},
        '&.operator': {color: color.operator},
        '&.prolog': {color: color.prolog},
        '&.property': {color: color.property},
        '&.pseudo-class': {color: color.pseudoClass},
        '&.pseudo-element': {color: color.pseudoElement},
        '&.punctuation': {color: color.punctuation},
        '&.regex': {color: color.regex},
        '&.selector': {color: color.selector},
        '&.string': {color: color.string},
        '&.symbol': {color: color.symbol},
        '&.tag': {color: color.tag},
        '&.unit': {color: color.unit},
        '&.url': {color: color.url},
        '&.variable': {color: color.variable},
      },
    },
  },
})

// const LANGUAGES: Record<string, string> = {
//   js: 'jsx',
//   javascript: 'jsx',
//   typescript: 'ts',
// }

export function Code(props: {children: React.ReactNode; size?: number | number[]}) {
  const {children, size} = props
  // const refractorLanguage = language && LANGUAGES[language]

  return (
    <Root data-testid="code">
      <CodeText data-testid="code__text" size={size as any}>
        {children}
        {/* {refractorLanguage && <Refractor inline language={refractorLanguage} value={children} />}
        {!refractorLanguage && children} */}
      </CodeText>
    </Root>
  )
}
