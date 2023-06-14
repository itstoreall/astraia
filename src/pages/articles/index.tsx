import s from '../page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs/Crumbs';
// import ArticleList from '@/components/Articles/List';
import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GET_ARTICLES from '@/gql/getArticles';

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

const Articles = ({ articles }: { articles: any[] }) => {
  const { theme } = useGlobalContext();

  if (!articles) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name='description' content='Авторизация' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={`${s.page} ${s[theme]}`}>
        <Crumbs routes={['articles']}>
          <h2 className={s.title}>Статьи</h2>
        </Crumbs>

        <ul>
          {articles &&
            articles?.map((el: any) => {
              return (
                <li key={el.id}>
                  <p>{el.id}</p>
                </li>
              );
            })}
        </ul>

        {/* <div>{articles?.length > 0 ? <ArticleList /> : <p>Loading...</p>}</div> */}
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
