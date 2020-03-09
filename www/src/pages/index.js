import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Layout from '../components/layout/Layout';
import Rainbow from '../components/Rainbow';

const IndexPage = ({ data }) => {
  const postData = data.sanityBlogPost;

  const seo = {};

  return (
    <Layout seo={seo}>
      <h1>MY NAME IS</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <Link to="/blog/">Go to Blog</Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      {/* <Rainbow /> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <div>
        {/* <h2>{postData.title}</h2> */}
        {/* <BlockContent blocks={postData._rawBody} /> */}
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    sanityBlogPost(_id: { eq: "7ceaf036-86a4-4b5b-adc1-0a6f8628581e" }) {
      _id
      slug {
        current
      }
      tags
      title
      publishedAt
      _rawBody
    }
  }
`;
