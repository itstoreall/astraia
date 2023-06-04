import { useCallback, useEffect } from 'react';
import router from 'next/router';
import useVerification from '@/hooks/useVerification';
import { useGlobalContext } from '@/context/GlobalContext';
import { MAGIC_ACCESS } from '@/constants';

const adm = MAGIC_ACCESS;

const Admin = () => {
  const { isAdmin, loading } = useVerification();
  const { access, setAccess } = useGlobalContext();

  const redirect = useCallback(() => {
    setAccess(null);
    router.push('/admin/login');
  }, [setAccess]);

  const enter = useCallback(() => {
    setAccess({ isAdmin, loading });
  }, [setAccess, isAdmin, loading]);

  useEffect(() => {
    !loading ? (!isAdmin ? redirect() : !access && enter()) : null;
  }, [isAdmin, loading, access, setAccess, redirect, enter]);

  const logOut = () => {
    localStorage.removeItem(adm);
    redirect();
  };

  return (
    <section>
      <h1>{'Admin'}</h1>
      {!loading && isAdmin ? (
        <>
          <div>
            <p>admin content</p>
          </div>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        'Verification (admin)...'
      )}
    </section>
  );
};

export default Admin;
