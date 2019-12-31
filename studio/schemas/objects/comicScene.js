export default {
  name: 'scene',
  title: 'Comic Scene',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'sceneNum',
      title: 'Scene Number',
      type: 'number',
    },
    {
      name: 'comicImg',
      title: 'Comic Image',
      type: 'imageWithMeta',
    },
    {
      name: 'parentComic',
      title: 'Comic',
      type: 'reference',
      to: [{ type: 'act' }, { type: 'comic' }],
    },
  ],
};
