import {FormFieldSet} from '@sanity/base/components'
import {Card, Select, Stack} from '@sanity/ui'
import {PatchEvent, set, unset, setIfMissing} from 'part:@sanity/form-builder/patch-event'
import React, {useCallback} from 'react'
import CodeEditor from './codeEditor/CodeEditor'

const PATH_LANGUAGE = ['language']
const PATH_CODE = ['code']

export function CodeInput(props: any) {
  const {onChange, type, value} = props
  const code = value?.code || ''
  const language = value?.language || ''
  const typeName = type.name

  const handleLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const nextLanguage = event.currentTarget.value

      onChange(
        PatchEvent.from([
          setIfMissing({_type: typeName}),
          nextLanguage ? set(nextLanguage, PATH_LANGUAGE) : unset(PATH_LANGUAGE),
        ])
      )
    },
    [onChange, typeName]
  )

  const handleCodeChange = useCallback(
    (nextCode: string) => {
      onChange(
        PatchEvent.from([
          setIfMissing({_type: typeName}),
          nextCode ? set(nextCode, PATH_CODE) : unset(PATH_CODE),
        ])
      )
    },
    [onChange, typeName]
  )

  return (
    <FormFieldSet title={type.title}>
      <Stack space={2}>
        <Select onChange={handleLanguageChange} value={language}>
          <option value="">Plain text</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
        </Select>

        <Card border radius={1} style={{height: 400}}>
          <CodeEditor code={code} fontSize={1} language={language} onChange={handleCodeChange} />
        </Card>
      </Stack>
    </FormFieldSet>
  )
}
