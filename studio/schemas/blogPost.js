export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'content',
      name: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'date',
      name: 'Date Published',
      type: 'datetime',
    },
  ],
};
