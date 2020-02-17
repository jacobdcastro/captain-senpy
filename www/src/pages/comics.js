import React from 'react';
import Layout from '../components/layout/Layout';

const ComicsPage = props => {
  const { title, tags, mainImage, _rawBody, _rawDescription } = props.data.sanityComicsPage;
  console.log(props.data.sanityComicsPage);

  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  );
};

export default ComicsPage;

export const COMICS_PAGE_QUERY = graphql`
  query COMICS_PAGE_QUERY {
    sanityComicsPage {
      id
      title
      mainImage {
        _key
        _type
        imgTitle
        alt
      }
      tags
      _rawMainImage
      _rawBody
      _rawDescription
    }
  }
`;
