import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import GET_ARTICLES from '@/gql/getArticles';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getStaticPaths = async () => {
  // const { id } = context.params;

  // console.log('id -->', id);

  const client = new ApolloClient({
    uri: 'https://magic-api-vercel.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ARTICLES,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  const paths = data.articles.map(({ id }: any) => ({
    params: { id },
  }));

  console.log('paths', paths);

  return {
    paths,
    fallback: false,
  };

  // console.log('data==>', data.getArticleById);

  // return {
  //   props: {
  //     article: data.getArticleById,
  //     // article: 44,
  //     // articles: data.articles,
  //   },
  // };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  console.log('id -->', id);

  const client = new ApolloClient({
    uri: 'https://magic-api-vercel.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ARTICLE_BY_ID,
    variables: { id: '647222a65a36cd74af4e1d77' },
  });

  if (!data || !data.getArticleById) {
    return {
      notFound: true,
    };
  }

  console.log('data==>', data.getArticleById);

  return {
    props: {
      article: data.getArticleById,
      // article: 44,
      // articles: data.articles,
    },
  };
};

const Article = () => {
  return <p>Article</p>;
};

export default Article;

/*
export const getServerSideProps = async (context: any) => {
  const { id } = context.params;

  console.log('id -->', id);

  const client = new ApolloClient({
    uri: 'https://magic-api-vercel.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ARTICLE_BY_ID,
    variables: { id: '647222a65a36cd74af4e1d77' },
  });

  if (!data || !data.getArticleById) {
    return {
      notFound: true,
    };
  }

  console.log('data==>', data.getArticleById);

  return {
    props: {
      article: data.getArticleById,
      // article: 44,
      // articles: data.articles,
    },
  };
};
*/
