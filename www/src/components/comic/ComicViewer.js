import React, { useState, useContext } from 'react';
import { ComicContext } from '../../utils/contexts';
import ComicDeck from './ComicDeck';
import Controls from './Controls';

const ComicViewer = ({ isOpen }) => {
  const comicData = useContext(ComicContext);
  console.log(comicData);
  return (
    <div style={{ width: '100%' }}>
      <h1>Comics</h1>
      {!isOpen && (
        <div id="comicViewer">
          <div className="comic-deck-wrapper">
            <ComicDeck {...comicData} cards={comicData.allEpisodes} />
          </div>
          {/* <Controls /> */}
        </div>
      )}
    </div>
  );
};

export default ComicViewer;
