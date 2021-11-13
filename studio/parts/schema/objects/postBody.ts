export const postBodyType = {
  name: 'postBody',
  title: 'Post body',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Header 1', value: 'h2'},
        {title: 'Header 2', value: 'h3'},
      ],
      lists: [{title: 'Numbered', value: 'number'}],
      marks: {
        annotations: [
          {
            type: 'object',
            name: 'link',
            title: 'Link',
            fields: [
              {
                type: 'url',
                name: 'href',
                title: 'URL',
              },
              {
                type: 'string',
                name: 'target',
                title: 'Target',
                options: {
                  layout: 'dropdown',
                  list: [{title: 'Blank page', value: '_blank'}],
                },
              },
            ],
            initialValue: {
              target: '_blank',
            },
          },
        ],
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
      },
    },
  ],
}
