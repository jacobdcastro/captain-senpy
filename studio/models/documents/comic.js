import { slugify } from '../../lib/slugify';

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
      type: 'excerptPortableText',
    },
    {
      name: 'acts',
      title: 'Acts',
      type: 'array',
      of: [{ type: 'act' }],
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
