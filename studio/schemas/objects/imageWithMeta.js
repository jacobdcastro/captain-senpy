export default {
  name: 'imageWithMeta',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'imgTitle',
      title: 'Image Title',
      type: 'string',
      description: 'A non-descriptive title of the image.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'text',
      description:
        'Some of your visitors cannot see images, be blind, color-blind, or low-sighted; alternative text helps describe the image for people who need it! Be descriptive, yet concise (1 sentence max, unless for comics).',
      options: {
        isHighlighted: true,
      },
      validation: Rule => Rule.required(),
    },
  ],
};
