/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import { useGlobalState } from '@/Global/context/use';
import * as gc from '@/config/global';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Sidebar from './Sidebar';
import List from './List';
import s from './Articles.module.scss';
import useFetchArticles from '@/hooks/useFetchArticles';
import { useEffect } from 'react';

const Articles = () => {
  const Content = () => {
    const { articles } = useFetchArticles();
    const { app } = useGlobalState();

    useEffect(() => {
      app.set(app.config.ARTICLES);
    }, []);

    return (
      <Container label={gc.page.articles.label}>
        {articles ? (
          <>
            <Sidebar />
            <main className={s.main}>
              <section className={s.articlesSection}>
                <List />
              </section>
            </main>
          </>
        ) : (
          <Loader />
        )}
      </Container>
    );
  };

  return (
    <ApolloProvider>
      <Navigation isActive={true}>
        <Content />
      </Navigation>
    </ApolloProvider>
  );
};

export default Articles;
