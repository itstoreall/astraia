import { ReactNode, useEffect } from 'react';
import { IChld } from '@/interfaces';
import s from './Main.module.scss';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  useApolloClient,
} from '@apollo/client';
import Container from '../Container';
import GET_ARTICLES from '@/gql/getArticles';
import { useGlobalContext } from '@/context/GlobalContext';

// export const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: 'https://magic-api-vercel.vercel.app/', // Replace with your GraphQL API endpoint
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: GET_ARTICLES,
//   });

//   console.log('data', data);

//   return {
//     props: { articles: data },
//   };
// };
// console.log('result ===>', result);

const Main = ({ children }: IChld) => {
  // console.log('articles ===>', articles);

  // getStaticProps();

  // const apolloClient = useApolloClient();
  // const { setArticles } = useGlobalContext();

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const result = await apolloClient.query({ query: GET_ARTICLES });
  //       result && setArticles(result.data.articles);

  //       console.log('result:', result);
  //     } catch (e) {
  //       console.error('ERROR in fetchArticles (Main)', e);
  //     }
  //   };
  //   fetchArticles();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <main className={`${s.main}`}>
      <Container parent={'main'}>{children}</Container>
    </main>
  );
};

export default Main;
