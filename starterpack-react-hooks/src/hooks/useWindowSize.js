import { useState, useEffect } from 'react';

export const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleUseWindowResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleUseWindowResize);

    return () => window.removeEventListener('resize', handleUseWindowResize);
  }, []);
  return dimensions;
};
