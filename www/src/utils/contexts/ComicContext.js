import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ComicContext } from './index';

const ComicContextParent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query COMIC_VIEWER_QUERY {
      allSanityAct {
        edges {
          node {
            _id
            title
            episodes {
              _id
              title
              comicImg {
                alt
                asset {
                  id
                  fluid {
                    ...GatsbySanityImageFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const acts = data.allSanityAct.edges;
  let allEpisodes = [];
  acts.forEach(act => act.node.episodes.forEach(ep => allEpisodes.push(ep)));

  const setCurrentComic = id => {
    setComicState({ ...blogState, current: id });
  };

  const [comicState, setComicState] = useState({
    current: allEpisodes[0]._id,
    acts: [],
    allEpisodes,
    setCurrentComic,
  });

  return <ComicContext.Provider value={comicState}>{children}</ComicContext.Provider>;
};

export default ComicContextParent;
