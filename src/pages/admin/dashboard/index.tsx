import router from 'next/router';
import { useGlobalContext } from '@/context/GlobalContext';
import s from '../../page.module.scss';
import useIsAdmin from '@/hooks/useIsAdmin';
import useViewport from '@/hooks/useViewport';
import useProportion from '@/hooks/useProportion';
import Crumbs from '@/components/Crumbs';
import Button from '@/components/Button';
import Dashboard from '@/components/Admin/Dashboard';
// import Image from 'next/image';
// import { IArticle } from '@/interfaces';
// import useFetchArticles from '@/hooks/useFetchArticles';
// import { ASTRAIA_ACCESS } from '@/constants';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import GET_ARTICLES from '@/gql/getArticles';
// import Spinner from '@/components/Spinner';

const DashboardPage = () => {
  const { isAdmin } = useIsAdmin('/admin');
  const { theme } = useGlobalContext();
  // const { isLoading, articles } = useFetchArticles();
  // const { viewport } = useViewport();
  // const { width, height } = useProportion(
  //   2,
  //   1,
  //   viewport === 'mobile' ? 390 : viewport === 'tablet' ? 300 : 400
  // );

  // console.log('isAdmin', isAdmin);

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard']}>
        <h2 className={s.title}>Дашборд</h2>
      </Crumbs>

      <article className={s.article}>
        {isAdmin ? <Dashboard /> : 'Аутентификация (дашборд)...'}
      </article>
    </section>
  );
};

export default DashboardPage;
