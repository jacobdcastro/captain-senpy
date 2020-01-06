import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdPerson from 'react-icons/lib/md/person';
import MdLayers from 'react-icons/lib/md/layers';
import MdInsertDriveFile from 'react-icons/lib/md/insert-drive-file';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';

const hiddenDocTypes = listItem =>
  ![
    'author',
    'blogPost',
    'comicAct',
    'comicEpisode',
    'product',
    'sitePage',
    'siteSettings',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog posts')
        .icon(MdInsertDriveFile)
        .schemaType('blogPost')
        .child(S.documentTypeList('blogPost').title('Blog posts')),

      // S.listItem()
      //   .title('Site Pages')
      //   .icon(MdLayers)
      //   .child(
      //     S.listItem()
      //       .title('Home Page')
      //       .icon(MdLayers)
      //       .schemaType('indexPageData')
      //       .child(S.documentTypeList('indexPageData').title('Home Page')),
      //     S.listItem()
      //       .title('Blog Page')
      //       .icon(MdLayers)
      //       .schemaType('blogPageData')
      //       .child(S.documentTypeList('blogPageData').title('Blog Page')),
      //     S.listItem()
      //       .title('Comics Page')
      //       .icon(MdLayers)
      //       .schemaType('comicsPageData')
      //       .child(S.documentTypeList('comicsPageData').title('Comics Page')),
      //     S.listItem()
      //       .title('Store Page')
      //       .icon(MdLayers)
      //       .schemaType('storePageData')
      //       .child(S.documentTypeList('storePageData').title('Store Page'))
      //   ),

      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),

      // S.listItem()
      //   .title('Alerts')
      //   .icon(MdPerson)
      //   .child(S.documentTypeList('alerts').title('Alerts')),

      S.listItem()
        .title('Store')
        .icon(MdShoppingCart)
        .child(
          S.listItem()
            .title('Products')
            .schemaType('product')
            .child(S.documentTypeList('product').title('Products'))
        ),

      ...S.documentTypeListItems().filter(hiddenDocTypes),

      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ]);
