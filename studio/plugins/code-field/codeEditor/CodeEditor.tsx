import {Box, BoxProps} from '@sanity/ui'
import codemirror from 'codemirror'
import React, {useCallback} from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import styled from 'styled-components'
import {codeEditorStyle, codeEditorSyntax} from './styles'

import 'codemirror/mode/jsx/jsx'
import 'codemirror/lib/codemirror.css'

interface CodeEditorProps extends BoxProps {
  code: string
  fontSize?: number | number[]
  language?: string
  onChange: (value: string) => void
  padding?: number
}

const Root = styled(Box)(codeEditorStyle, codeEditorSyntax)

const MODES: Record<string, string | undefined> = {
  javascript: 'jsx',
  jsx: 'jsx',
  typescript: 'jsx',
}

export default function CodeEditor(
  props: CodeEditorProps & Omit<React.HTMLProps<HTMLDivElement>, 'onChange'>
) {
  const {code, fontSize = 2, language, onChange, padding = 3, ...restProps} = props

  const handleCodeMirrorChange = useCallback(
    (_editor: codemirror.Editor, _change: codemirror.EditorChange, value: string) => {
      onChange(value)
    },
    [onChange]
  )

  return (
    <Root {...restProps} $padding={padding} $size={fontSize}>
      <CodeMirror
        onBeforeChange={handleCodeMirrorChange}
        options={{mode: language && MODES[language]}}
        value={code}
      />
    </Root>
  )
}
