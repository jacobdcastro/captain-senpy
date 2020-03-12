import React, { useContext } from 'react';
import { ComicContext } from '../../../utils/contexts';

const ComicSidebar = () => {
  const data = useContext(ComicContext);
  return (
    <nav className="sidebar-contents comic">
      <ul>
        {data.acts.map(({ node }) => {
          return (
            <li key={node._id}>
              <h3>{node.title}</h3>
              <ul>
                {node.episodes.map(ep => (
                  <li
                    key={ep._key}
                    className={`li-episode${ep._key === data.current ? ' current' : ''}`}
                  >
                    <button onClick={() => data.setCurrentComic(ep._key)}>{ep.title}</button>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ComicSidebar;
