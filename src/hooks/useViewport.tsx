import { useEffect, useState } from 'react';
import isTablet from '@/utils/isTablet';
import isLandscape from '@/utils/isLandscape';

const useViewport = (isValue?: boolean, setIsValue?: (b: boolean) => void) => {
  const [viewport, setViewport] = useState<string>('');
  const [landscape, setLandscape] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      setViewport(isTablet() ? 'tablet' : 'mobile');
      setLandscape(isLandscape() ? 'landscape' : 'portrait');
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (setIsValue) isValue && setIsValue(!isValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport]);

  return { viewport, landscape };
};

export default useViewport;
