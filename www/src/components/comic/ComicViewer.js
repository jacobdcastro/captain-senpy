import React, { useState, useContext } from 'react';
import { ComicContext } from '../../utils/contexts';
import ComicCard from './ComicCard';
import Controls from './Controls';

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
