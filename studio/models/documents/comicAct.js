export default {
  name: 'act',
  title: 'Comic Act',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'actNum',
      title: 'Act Number',
      type: 'number',
    },
    {
      name: 'episodes',
      title: 'Episodes',
      type: 'array',
      of: [{ type: 'episode' }],
      options: {
        editModal: 'fullscreen',
      },
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Page Description',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
  ],
};
