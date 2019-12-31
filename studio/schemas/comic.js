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
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'acts',
      title: 'Acts',
      type: 'array',
      of: [{ type: 'comicAct' }],
    },
    {
      name: 'slug',
      title: 'URL Field (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => slugify(input),
      },
    },
  ],
};
