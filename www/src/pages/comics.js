import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ComicViewer from '../components/comic/ComicViewer';
import SidebarContents from '../components/layout/SidebarContents';

const ComicsPage = props => {
  const { title, tags, mainImage, _rawBody, _rawDescription } = props.data.sanityComicsPage;

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <ComicViewer />
      </div>
      <SidebarContents pageType="comic" />
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
