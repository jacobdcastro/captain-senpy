import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';
import serializers from './serializers';

const BlockContent = blocks => {
  return (
    <div>
      <h3>Block Content Here</h3>
      <BaseBlockContent blocks={blocks} serializers={serializers} />
    </div>
  );
};

export default BlockContent;
