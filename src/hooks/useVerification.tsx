import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery, OperationVariables } from '@apollo/client';
import { MAGIC_ACCESS } from '@/constants';
import IS_ADMIN from '../gql/isAdmin';

const adm = MAGIC_ACCESS;

const useVerification = () => {
  const [token, setToken] = useState<{ token: string } | null>(null);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const localStorageToken = JSON.parse(localStorage.getItem(adm) || 'null');

    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [pathname]);

  const { loading, data } = useQuery(IS_ADMIN, {
    variables: token as OperationVariables,
  });

  console.log('data:', data);
  console.log('data?.isAdmin || null:', data?.isAdmin || null);

  return {
    isAdmin: data?.isAdmin || null,
    loading,
    token: token?.token || null,
  };
};

export default useVerification;
