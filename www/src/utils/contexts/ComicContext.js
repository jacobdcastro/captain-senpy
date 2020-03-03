import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ComicContext } from './index';

const ComicContextParent = ({ children }) => {
  const [comicData, setComicData] = useState([]);
  // const { data } = useStaticQuery(graphql``);
  return <ComicContext.Provider>{children}</ComicContext.Provider>;
};

export default ComicContextParent;
