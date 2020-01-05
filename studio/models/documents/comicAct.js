export default {
  name: 'act',
  title: 'Comic Act',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'actNum',
      title: 'Act Number',
      type: 'number'
    },
    {
      name: 'episodes',
      title: 'Episodes',
      type: 'array',
      of: [{ type: 'episode' }]
    },
    {
      name: 'parentComic',
      title: 'Comic',
      type: 'reference',
      to: [{ type: 'comic' }]
    }
  ]
}
