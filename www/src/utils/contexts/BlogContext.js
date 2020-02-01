import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// context is string of blog post id
const BlogContext = React.createContext('');

const BlogContextParent = ({ children }) => {
  // const { _id } = useStaticQuery(graphql``);
  // return <BlogContext.Provider data={_id}>{children}</BlogContext.Provider>;
};

export default BlogContextParent;
