import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ComicViewer from '../components/comic/ComicViewer';
import SidebarContents from '../components/layout/SidebarContents';
import '../styles/comic/comic-page.scss';

const ComicsPage = props => {
  const { title, tags, mainImage, _rawBody, _rawDescription } = props.data.sanityComicsPage;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div id="comicPageContent">
        <ComicViewer isOpen={isOpen} />
        {/* <SidebarContents pageType="comic" /> */}
      </div>
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
        alt
      }
      tags
      _rawMainImage
      _rawBody
      _rawDescription
    }
  }
`;
