import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import SidebarContents from '../components/layout/SidebarContents';
import Layout from '../components/layout';
import '../styles/blog/blog-page.scss';

const BlogPostPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const postData = data.sanityBlogPost;
  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <div id="blogPageContent">
        <article className="blogPostContent">
          <h1>{postData.title}</h1>
          <BlockContent blocks={postData._rawBody} />
        </article>
        <SidebarContents pageType="blog" />
      </div>
    </Layout>
  );
};

export default BlogPostPage;

export const BLOG_POST_QUERY = graphql`
  query($id: String!) {
    sanityBlogPost(_id: { eq: $id }) {
      _id
      title
      slug {
        current
      }
      authors {
        _key
        author {
          name
        }
      }
      publishedAt(formatString: "MMMM D, YYYY")
      _rawBody
    }
  }
`;
