import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IArticleElement } from '@/interfaces';
import { AddArticleContext } from '@/context/AddArticleContext';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs/Crumbs';
import { useGlobalContext } from '@/context/GlobalContext';
import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import GET_ARTICLES from '@/gql/getArticles';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import AddForm from '@/components/Add/AddForm';
import ArticleEditor from '@/components/Add/ArticleEditor';

const AddPage = () => {
  const [articleElements, setArticleElements] = useState<IArticleElement[]>([]);

  const { theme } = useGlobalContext();

  return (
    <AddArticleContext.Provider
      value={{
        articleElements,
        setArticleElements,
      }}
    >
      <section className={`${s.page} ${s[theme]}`}>
        <Crumbs routes={['admin', 'add']}>
          <h2 className={s.title}>{'Добавление'}</h2>
        </Crumbs>
        <AddForm />
        <ArticleEditor />
      </section>
    </AddArticleContext.Provider>
  );
};

export default AddPage;
