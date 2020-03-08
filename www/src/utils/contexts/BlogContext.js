import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogContext } from './index';

const BlogContextParent = ({ children }) => {
  const [blogState, setBlogState] = useState({ current: '' });
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
          publishedAt
        }
      }
    }
  `);
  const allBlogPosts = data.allSanityBlogPost.nodes;

  useEffect(() => {
    // combine posts data w/ current id
    setBlogState({ current: allBlogPosts[0]._id, allBlogPosts });
  }, []);

  return <BlogContext.Provider value={blogState}>{children}</BlogContext.Provider>;
};

export default BlogContextParent;
