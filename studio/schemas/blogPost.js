import { slugify } from '../lib/slugify';

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
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
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'coverImg',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'published',
      title: 'Date Published',
      type: 'datetime',
      options: {
        timeStep: 5,
        calendarTodayLabel: 'Today',
      },
    },
  ],
};
