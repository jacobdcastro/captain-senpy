import { useEffect, useState } from 'react';

// custom hook
const useWindowWidth = () => {
  const [width, setWidth] = useState(null);

  // sets width when window is resized (from event listener)
  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    // only runs if in browser
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth); // sets initial width
      window.addEventListener('resize', handleWindowResize, true);

      return () => {
        window.removeEventListener('resize', handleWindowResize, true);
      };
    }
  }, []);

  return width;
};

export default useWindowWidth;
