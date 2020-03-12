export default {
  name: 'episode',
  title: 'Comic Episode',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Comic Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
    {
      name: 'comicImg',
      title: 'Comic Image',
      type: 'mainImage',
    },
  ],
};
