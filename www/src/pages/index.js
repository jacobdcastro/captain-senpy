import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
      <BlockContent blocks={data._rawBody} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    allSanityBlogPost {
      edges {
        node {
          id
          title
          slug {
            current
          }
          publishedAt
          _rawBody
        }
      }
    }
  }
`;
