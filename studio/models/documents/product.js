export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'productImg',
      title: 'Product Image',
      type: 'mainImage',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Do not include dollar symbol. Must match pattern: x.xx',
      validation: Rule => Rule.required().precision(2),
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      description: 'If left unspecified, the site will assume it is NOT in stock.',
    },
  ],
};
