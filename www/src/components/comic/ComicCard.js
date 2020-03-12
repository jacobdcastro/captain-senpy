import React from 'react';
import Img from 'gatsby-image';
import { animated, interpolate } from 'react-spring';

const ComicCard = ({ ep, bind, i, rot, scale, trans }) => {
  return (
    <animated.div
      className="comic-card"
      style={{ transform: interpolate([rot, scale], trans) }}
      {...bind(i)}
    >
      <h2>{ep.title}</h2>
      <Img
        className="comic-img"
        fluid={ep.comicImg.asset.fluid}
        alt={ep.comicImg.alt}
        title={ep.title}
      />
    </animated.div>
  );
};

export default ComicCard;
