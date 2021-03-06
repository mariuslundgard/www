export default {
  type: "document",
  name: "post",
  title: "Post",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title"
    },
    {
      type: "datetime",
      name: "published",
      title: "Published"
    },
    {
      type: "postBody",
      name: "body",
      title: "Body"
    }
  ]
};
