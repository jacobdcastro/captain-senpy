import { createContext } from 'react';

// context is string of blog post id
export const BlogContext = createContext('');

export const ComicContext = createContext([
  {
    id: 1245678,
    episodes: [
      {
        id: 124567,
        finished: true,
        active: false,
      },
    ],
  },
  {
    id: 1245678,
    episodes: [
      {
        id: 124567,
        finished: false,
        active: true,
      },
    ],
  },
]);
