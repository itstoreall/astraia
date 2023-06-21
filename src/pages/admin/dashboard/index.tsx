import { useCallback } from 'react';
import router from 'next/router';
import { useGlobalContext } from '@/context/GlobalContext';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs/Crumbs';
import { ASTRAIA_ACCESS } from '@/constants';
import Button from '@/components/Button';

const adm = ASTRAIA_ACCESS;

const Dashboard = () => {
  const { theme, setAccess } = useGlobalContext();

  const redirect = useCallback(() => {
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

      <article className={s.article}>
        <Button
          fn={logOut}
          // style={{ backgroundColor: 'teal' }}
          // hover={{ backgroundColor: 'tomato' }}
        >
          Выйти
        </Button>
        <Button
          fn={() => router.push('/admin/dashboard/add')}
          // style={{ backgroundColor: 'teal' }}
          // hover={{ backgroundColor: 'tomato' }}
        >
          Добавить
        </Button>
      </article>
    </section>
  );
};

export default Dashboard;
