import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GET_ARTICLES from '@/gql/getArticles';

const useFetchArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = new ApolloClient({
        uri: 'https://magic-api-vercel.vercel.app/',
        cache: new InMemoryCache(),
      });

      const { data, loading } = await client.query({
        query: GET_ARTICLES,
      });

      if (!data)
        return {
          notFound: true,
        };

      if (data && data.articles) {
        setArticles(data.articles);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { isLoading, articles };
};

export default useFetchArticles;
