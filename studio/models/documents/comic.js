export default {
  name: 'comic',
  title: 'Comic',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'acts',
      title: 'Acts',
      type: 'array',
      of: [{ type: 'act' }],
    },
  ],
};
