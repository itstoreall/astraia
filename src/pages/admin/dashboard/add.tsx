import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs/Crumbs';
import Image from 'next/image';
import { useGlobalContext } from '@/context/GlobalContext';
import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import GET_ARTICLES from '@/gql/getArticles';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const AddPage = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['admin', 'add']}>
        <h2 className={s.title}>{'Добавление'}</h2>
      </Crumbs>
    </section>
  );
};

export default AddPage;
