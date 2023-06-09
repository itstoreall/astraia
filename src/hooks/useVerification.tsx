import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useQuery, OperationVariables } from '@apollo/client';
import { ASTRAIA_ACCESS } from '@/constants';
import IS_ADMIN from '../gql/isAdmin';

const adm = ASTRAIA_ACCESS;

const useVerification = () => {
  const [token, setToken] = useState<{ token: string } | null>(null);

  // const router = useRouter();
  // const { pathname } = router;

  useEffect(() => {
    const localStorageToken = JSON.parse(localStorage.getItem(adm) || 'null');

    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, []);

  const { loading, data } = useQuery(IS_ADMIN, {
    variables: token as OperationVariables,
  });

  return {
    isAdmin: data ? data?.isAdmin : null,
    loading,
    token: token?.token || null,
  };
};

export default useVerification;
