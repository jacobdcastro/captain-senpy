import { slugify } from '../../lib/slugify';

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'coverImg',
      title: 'Cover Image',
      type: 'imageWithMeta',
    },
    {
      name: 'published',
      title: 'Date Published',
      type: 'datetime',
      options: {
        timeStep: 5,
        calendarTodayLabel: 'Today',
      },
      validation: Rule => Rule.required(),
    },
  ],
};
