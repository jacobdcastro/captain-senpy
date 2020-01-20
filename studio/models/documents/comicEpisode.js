export default {
  name: 'episode',
  title: 'Comic Episode',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'comicImg',
      title: 'Comic Image',
      type: 'mainImage',
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Page Description',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {},
    },
  ],
};
