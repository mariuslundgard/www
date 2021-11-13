export const configType = {
  type: 'document',
  name: 'config',
  title: 'Config',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'object',
      name: 'frontPage',
      title: 'Front page',
      fields: [
        {
          type: 'postBody',
          name: 'content',
          title: 'Content',
        },
      ],
    },
  ],
}
