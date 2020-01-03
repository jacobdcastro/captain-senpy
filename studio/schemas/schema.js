import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import blogPost from './documents/blogPost';
import comic from './documents/comic';
import comicAct from './documents/comicAct';
import comicScene from './documents/comicScene';
import product from './documents/product';
import siteSettings from './documents/siteSettings';
import pages from './documents/pages';

// top-level objects
import imageWithMeta from './objects/imageWithMeta';

export default createSchema({
  name: 'captain-senpy-schema',
  types: schemaTypes.concat([
    blogPost,
    comic,
    comicAct,
    comicScene,
    product,
    siteSettings,
    pages,
    imageWithMeta,
  ]),
});
