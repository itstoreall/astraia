import { useCallback } from 'react';
import router from 'next/router';
import s from '../page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs/Crumbs';
import { MAGIC_ACCESS } from '@/constants';

const adm = MAGIC_ACCESS;

const Dashboard = () => {
  const { theme, access, setAccess } = useGlobalContext();

  const redirect = useCallback(() => {
    console.log(1);
    setAccess(null);
    router.push('/admin/login');
  }, [setAccess]);

  const logOut = () => {
    localStorage.removeItem(adm);
    redirect();
  };

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard']}>
        <h2 className={s.title}>Редактор</h2>
      </Crumbs>
      <button onClick={logOut}>Log out</button>
    </section>
  );
};

export default Dashboard;
