export const postType = {
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
    },
    {
      type: 'datetime',
      name: 'published',
      title: 'Published',
    },
    {
      type: 'postBody',
      name: 'body',
      title: 'Body',
    },
  ],
}
