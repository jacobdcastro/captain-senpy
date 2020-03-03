import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogContext } from './index';

const BlogContextParent = ({ children }) => {
  // const { _id } = useStaticQuery(graphql``);
  // return <BlogContext.Provider data={_id}>{children}</BlogContext.Provider>;
};

export default BlogContextParent;
