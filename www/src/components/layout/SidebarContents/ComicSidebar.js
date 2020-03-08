import React, { useContext } from 'react';
import { ComicContext } from '../../../utils/contexts';

const ComicSidebar = () => {
  const data = useContext(ComicContext);
  console.log(data);
  return (
    <nav>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <h3>Act 1</h3>
          <ul>
            <li>Ep 1</li>
            <li>Ep 2</li>
            <li>Ep 3</li>
          </ul>
        </li>
        <li>
          <h3>Act 1</h3>
          <ul>
            <li>Ep 1</li>
            <li>Ep 2</li>
            <li>Ep 3</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default ComicSidebar;
