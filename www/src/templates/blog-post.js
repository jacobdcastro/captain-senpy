import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const BlogPostPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h1>{data.sanityBlogPost.title}</h1>
    </Layout>
  );
};

export default BlogPostPage;

export const BLOG_POST_QUERY = graphql`
  query($id: String!) {
    sanityBlogPost(_id: { eq: $id }) {
      _id
      title
    }
  }
`;
