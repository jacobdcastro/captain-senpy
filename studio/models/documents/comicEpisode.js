export default {
  name: 'episode',
  title: 'Comic Episode',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'episodeNum',
      title: 'Episode Number',
      type: 'number'
    },
    {
      name: 'comicImg',
      title: 'Comic Image',
      type: 'mainImage'
    },
    {
      name: 'parentComic',
      title: 'Comic',
      type: 'reference',
      to: [{ type: 'act' }, { type: 'comic' }]
    }
  ]
}
