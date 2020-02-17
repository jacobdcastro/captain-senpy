import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const ComicContext = React.createContext([
  {
    id: 1245678,
    episodes: [
      {
        id: 124567,
        finished: true,
        active: false,
      },
    ],
  },
  {
    id: 1245678,
    episodes: [
      {
        id: 124567,
        finished: false,
        active: true,
      },
    ],
  },
]);

const ComicContextParent = ({ children }) => {
  const [comicData, setComicData] = useState([])
  // const { data } = useStaticQuery(graphql``);
  return <ComicContext.Provider>{children}</ComicContext.Provider>;
};

export default ComicContextParent;
