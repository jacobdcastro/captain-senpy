import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Layout from '../components/layout';
import Rainbow from '../components/Rainbow';

const IndexPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const postData = data.sanityBlogPost;

  const seo = {};

  return (
    <Layout seo={seo} isOpen={isOpen} setIsOpen={setIsOpen}>
      <Rainbow />
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
