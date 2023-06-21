import { useCallback, useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';
import { IArticleElement } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import { AddArticleContext } from '@/context/AddArticleContext';
import useVerification from '@/hooks/useVerification';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs/Crumbs';
// import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
// import GET_ARTICLES from '@/gql/getArticles';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
import AddForm from '@/components/Add/AddForm';
import ArticleEditor from '@/components/Add/ArticleEditor';
import useIsAdmin from '@/hooks/useIsAdmin';

const AddPage = () => {
  useIsAdmin('/admin');

  const [articleElements, setArticleElements] = useState<IArticleElement[]>([]);

  const { theme, access } = useGlobalContext();

  return (
    <>
      {access ? (
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

            <article className={s.article}>
              <AddForm />
              <ArticleEditor />
            </article>
          </section>
        </AddArticleContext.Provider>
      ) : (
        'Verification (admin)...'
      )}
    </>
  );
};

export default AddPage;
