import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogContext } from './index';

const BlogContextParent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BLOG_POST_VIEWER_QUERY {
      allSanityBlogPost(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          _id
          title
          slug {
            _key
            _type
            current
          }
          authors {
            _key
          }
          publishedAt(formatString: "MMMM D, YYYY")
          _rawBody
        }
      }
    }
  `);
  const allBlogPosts = data.allSanityBlogPost.nodes;

  const setCurrentBlogPost = id => {
    setBlogState({ ...blogState, current: id });
  };

  const [blogState, setBlogState] = useState({
    current: allBlogPosts[0]._id,
    allBlogPosts,
    setCurrentBlogPost,
  });

  return <BlogContext.Provider value={blogState}>{children}</BlogContext.Provider>;
};

export default BlogContextParent;
