import { IArticle } from '@/interfaces';
import s from '../page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs/Crumbs';
import ArticleList from '@/components/Articles/List';
import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GET_ARTICLES from '@/gql/getArticles';
import Link from 'next/link';
import { useEffect } from 'react';

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'https://magic-api-vercel.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ARTICLES,
  });

  if (!data)
    return {
      notFound: true,
    };

  return {
    props: {
      articles: data.articles,
    },
  };
};

const Articles = ({ articles }: { articles: IArticle[] }) => {
  const { theme } = useGlobalContext();

  console.log('articles', articles[0]);

  return (
    <>
      <Head>
        <title>Статьи</title>
        <meta name='description' content='Статьи из тонкого мира' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={`${s.page} ${s[theme]}`}>
        <Crumbs routes={['articles']}>
          <h2 className={s.title}>Статьи</h2>
        </Crumbs>

        {articles ? <ArticleList articles={articles} /> : <p>No articles!</p>}
      </section>
    </>
  );
};

export default Articles;

/*
export const getStaticProps = async () => {
  try {
    const client = new ApolloClient({
      uri: 'https://magic-api-vercel.vercel.app/',
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: GET_ARTICLES,
    });

    if (!data)
      return {
        notFound: true,
      };

    return {
      props: {
        articles: data.articles,
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};
*/
