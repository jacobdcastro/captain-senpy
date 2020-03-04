import React, { useState, useContext } from 'react';
import ComicContext from '../../utils/contexts/ComicContext';

const ComicViewer = () => {
  const allEpisodes = useContext(ComicContext);
  console.log(allEpisodes);

  return (
    <div id="comicViewer">
      <h1>Comic number 1!</h1>
    </div>
  );
};

export default ComicViewer;
