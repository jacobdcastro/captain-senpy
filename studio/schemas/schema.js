import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import blogPost from './documents/blogPost';
import product from './documents/product';
// import comic from './documents/comic';
// import siteSettings from './documents/siteSettings';

// objects
import imageWithMeta from './objects/imageWithMeta';

export default createSchema({
  name: 'captain-senpy-schema',
  types: schemaTypes.concat([blogPost, product, imageWithMeta]),
});
