export default {
  name: 'act',
  title: 'Comic Act',
  type: 'object',
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
      name: 'scenes',
      title: 'Scenes',
      type: 'array',
      of: [{ type: 'scene' }],
    },
    {
      name: 'parentComic',
      title: 'Comic',
      type: 'reference',
      to: [{ type: 'comic' }],
    },
  ],
};
