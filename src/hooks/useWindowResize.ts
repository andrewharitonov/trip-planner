import {useEffect, useState} from 'react';
import {MOBILE_WIDTH_BREAKPOINT} from '../constants/globals';
import {debounce} from '../helpers/debounce/debounce';

export const useWindowResize = (callback?: () => void, debounceMs?: number) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeListener = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      callback?.();
    };
    const debouncedListener = debounce(resizeListener, debounceMs);

    // get window size on mount
    resizeListener();

    window.addEventListener('resize', debouncedListener);

    return () => {
      window.removeEventListener('resize', debouncedListener);
    };
  }, []);

  const isMobileLayout = windowSize.width <= MOBILE_WIDTH_BREAKPOINT;
  return {windowSize, isMobileLayout};
};
