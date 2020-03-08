import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Layout from '../components/layout/Layout';
// import BlogPostListing from '../components/BlogPostListing';
import '../styles/blog/blog-page.scss';
import SidebarContents from '../components/layout/SidebarContents';

const BlogPage = ({ data }) => {
  const pageData = data.sanityBlogPage;
  const posts = data.allSanityBlogPost.edges;

  return (
    <Layout>
      <SidebarContents pageType="blog" />
      <h1>{pageData.title}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <BlockContent blocks={pageData._rawDescription} />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const BLOG_PAGE_QUERY = graphql`
  query BLOG_PAGE_QUERY {
    sanityBlogPage {
      _id
      title
      _rawMainImage
      tags
      _rawDescription
    }

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
