import React, { useContext } from 'react';
import { ComicContext } from '../../utils/contexts/ComicContext';

const TableOfContents = () => {
  const state = useContext(ComicContext);

  console.log(state);

  return (
    <div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
