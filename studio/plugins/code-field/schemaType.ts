import {CodeBlockIcon} from '@sanity/icons'
import {CodeInput} from './CodeInput'

export default {
  type: 'object',
  name: 'code',
  title: 'Code',
  icon: CodeBlockIcon,
  inputComponent: CodeInput,
  fields: [
    {
      type: 'string',
      name: 'language',
      title: 'Language',
    },
    {
      type: 'text',
      name: 'code',
      title: 'Code',
    },
  ],
}
