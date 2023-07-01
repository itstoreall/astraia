import Head from 'next/head';
import { IArticle } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import client from '@/utils/apolloClient';
import PageLoading from '@/components/PageLoading';
import GET_ARTICLES from '@/gql/getArticles';
import s from '../page.module.scss';
import Crumbs from '@/components/Crumbs';
import ArticleList from '@/components/Articles/List';
import { useEffect } from 'react';
// import Link from 'next/link';

export const getStaticProps = async () => {
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
  const { theme, isLoading, setIsLoading } = useGlobalContext();

  console.log(' ');
  console.log('articles -->', articles);
  console.log('isLoading -->', isLoading);

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

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

        <PageLoading>
          <article className={s.article}>
            {articles ? (
              <ArticleList articles={articles} />
            ) : (
              <p>No articles!</p>
            )}
          </article>
        </PageLoading>
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
