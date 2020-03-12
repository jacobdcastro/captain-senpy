import React, { useState, useContext } from 'react';
import { ComicContext } from '../../utils/contexts';
import ComicDeck from './ComicDeck';
import Controls from './Controls';

const ComicViewer = () => {
  const { allEpisodes } = useContext(ComicContext);
  return (
    <div>
      <h1>Comic</h1>
      <div id="comicViewer">
        <ComicDeck cards={allEpisodes} />
        <Controls />
      </div>
    </div>
  );
};

export default ComicViewer;
