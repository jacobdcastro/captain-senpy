import React from 'react';
import ComicContextParent from './src/utils/contexts/ComicContext';
import BlogContextParent from './src/utils/contexts/BlogContext';

export const wrapRootElement = ({ element }) => (
  <ComicContextParent>
    <BlogContextParent>{element}</BlogContextParent>
  </ComicContextParent>
);
