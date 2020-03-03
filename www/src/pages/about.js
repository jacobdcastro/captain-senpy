import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Layout from '../components/layout/Layout';
import BlogPostListing from '../components/BlogPostListing';
import '../styles/blog/blog-page.scss';

const AboutPage = ({ data }) => {
  const pageData = data.sanityAboutPage;
  // const posts = data.allSanityBlogPost.edges;

  return (
    <Layout>
      {/* <h1>{pageData.title}</h1> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      {/* <BlockContent blocks={pageData._rawDescription} /> */}

      <h2>About Me!</h2>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_PAGE_QUERY {
    # sanityAboutPage {
    #   _id
    #   title
    #   _rawMainImage
    #   tags
    #   _rawDescription
    # }

    allSanityBlogPost {
      edges {
        node {
          _id
          title
          slug {
            _key
            _type
            current
          }
          authors {
            author {
              name
            }
          }
          publishedAt
          _rawMainImage
          _rawExcerpt
        }
      }
    }
  }
`;
