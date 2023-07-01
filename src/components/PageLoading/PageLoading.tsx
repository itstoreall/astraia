import { ReactNode, useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import Spinner from '../Spinner';

const PageLoading = ({ children }: { children: ReactNode }) => {
  const { isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!isLoading ? children : <Spinner />}</>;
};

export default PageLoading;
