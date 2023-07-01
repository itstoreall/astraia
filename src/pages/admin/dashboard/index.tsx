import { useGlobalContext } from '@/context/GlobalContext';
import PageLoading from '@/components/PageLoading';
import useIsAdmin from '@/hooks/useIsAdmin';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs';
import Dashboard from '@/components/Admin/Dashboard';

const DashboardPage = () => {
  const { isAdmin } = useIsAdmin('/admin');
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard']}>
        <h2 className={s.title}>Дашборд</h2>
      </Crumbs>

      <PageLoading>
        <article className={s.article}>
          {isAdmin ? <Dashboard /> : 'Аутентификация (дашборд)...'}
        </article>
      </PageLoading>
    </section>
  );
};

export default DashboardPage;
