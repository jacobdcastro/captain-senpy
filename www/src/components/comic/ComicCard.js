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
      <div className="grab-layer" />
      <div className="card-content-wrapper">
        <Img
          className="comic-img"
          fluid={ep.comicImg.asset.fluid}
          alt={ep.comicImg.alt}
          title={ep.title}
        />
        <h2>{ep.title}</h2>
      </div>
    </animated.div>
  );
};

export default ComicCard;
