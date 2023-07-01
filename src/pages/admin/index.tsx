import { useCallback, useEffect } from 'react';
import router from 'next/router';
import useVerification from '@/hooks/useVerification';
import { ASTRAIA_ACCESS } from '@/constants';
import { useGlobalContext } from '@/context/GlobalContext';
import PageLoading from '@/components/PageLoading';
import s from '../page.module.scss';
import Crumbs from '@/components/Crumbs';

const adm = ASTRAIA_ACCESS;

const AdminPage = () => {
  const { isAdmin, loading } = useVerification();
  const { access, setAccess, theme } = useGlobalContext();

  const redirect = useCallback(() => {
    console.log(1, 'redirect');
    setAccess(null);
    router.push('/admin/login');
  }, [setAccess]);

  const enter = useCallback(() => {
    console.log(2, 'enter');
    setAccess({ isAdmin, loading });
    router.push('/admin/dashboard');
  }, [setAccess, isAdmin, loading]);

  const toDash = useCallback(() => {
    console.log(3, 'toDash');
    router.push('/admin/dashboard');
  }, []);

  useEffect(() => {
    !loading ? (!isAdmin ? redirect() : !access ? enter() : toDash()) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin, loading, access, setAccess, redirect, enter]);

  const logOut = () => {
    localStorage.removeItem(adm);
    redirect();
  };

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['admin']}>
        <h2 className={s.title}>admin</h2>
      </Crumbs>

      {/* <PageLoading> */}
      <article className={s.article}>
        {!loading && isAdmin ? (
          <button onClick={logOut}>Log out</button>
        ) : (
          'Аутентификация (админ)...'
        )}
      </article>
      {/* </PageLoading> */}
    </section>
  );
};

export default AdminPage;
