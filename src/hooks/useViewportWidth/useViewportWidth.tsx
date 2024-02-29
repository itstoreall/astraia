import { useEffect, useState } from 'react';
import { ViewportState } from './types';
import * as utils from './utils';

const useViewportWidth = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    isMobile: utils.setIsMobile(window.innerWidth),
    breakpoint: utils.setBreakpoint(window.innerWidth)
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setViewport({
          width: window.innerWidth,
          isMobile: utils.setIsMobile(window.innerWidth),
          breakpoint: utils.setBreakpoint(window.innerWidth)
        });
      }, 50);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewport as ViewportState;
};

export default useViewportWidth;
