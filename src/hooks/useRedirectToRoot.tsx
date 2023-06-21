import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useRedirectToRoot = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url !== '/') {
        router.push('/');
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return null; // Hook doesn't render anything, so returning null
};

export default useRedirectToRoot;
