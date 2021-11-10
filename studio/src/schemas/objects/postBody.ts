const postBody = {
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
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
      },
    },
  ],
}

export default postBody
