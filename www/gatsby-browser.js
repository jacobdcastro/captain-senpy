import React from 'react';
import ComicContextParent from './src/utils/contexts/ComicContext';

export const wrapRootElement = ({ element }) => <ComicContextParent>{element}</ComicContextParent>;
