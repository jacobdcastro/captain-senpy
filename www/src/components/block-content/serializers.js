import React from 'react';
import BlogInlineImage from './BlogInlineImage';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 key={props.node._id}>{props.children}</h1>;

        case 'h2':
          return <h2 key={props.node._id}>{props.children}</h2>;

        case 'h3':
          return <h3 key={props.node._id}>{props.children}</h3>;

        case 'h4':
          return <h4 key={props.node._id}>{props.children}</h4>;

        case 'blockquote':
          return <blockquote key={props.node._id}>{props.children}</blockquote>;

        default:
          return <p key={props.node._id}>{props.children}</p>;
      }
    },
    blogInlineImage(props) {
      return <BlogInlineImage sanityImgId={props.node.asset._ref} />;
    },
  },
};

export default serializers;
