export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      title: 'Alternative text',
      description:
        'Some of your visitors cannot see images, be blind, color-blind, or low-sighted; alternative text helps describe the image for people who need it! Be descriptive, yet concise (1 sentence max, unless for comics).',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
