import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// site page schemas
import indexPage from './documents/pages/indexPage';
import blogPage from './documents/pages/blogPage';
import comicsPage from './documents/pages/comicsPage';
import storePage from './documents/pages/storePage';

// document schemas
import author from './documents/author';
import blogPost from './documents/blogPost';
import comic from './documents/comic';
import comicAct from './documents/comicAct';
import comicEpisode from './documents/comicEpisode';
import product from './documents/product';
import siteSettings from './documents/siteSettings';

// object types
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import authorReference from './objects/authorReference';

export default createSchema({
  name: 'captain-senpy',
  types: schemaTypes.concat([
    indexPage,
    blogPage,
    comicsPage,
    storePage,
    author,
    blogPost,
    comic,
    comicAct,
    comicEpisode,
    product,
    siteSettings,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
  ]),
});
