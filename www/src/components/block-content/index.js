import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';
import serializers from './serializers';

const BlockContent = ({ blocks }) => {
  return (
    <div>
      <BaseBlockContent
        blocks={blocks}
        serializers={serializers}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
      />
    </div>
  );
};

export default BlockContent;
