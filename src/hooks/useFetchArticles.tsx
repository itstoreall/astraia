import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GET_ARTICLES from '@/gql/getArticles';

const useFetchArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = new ApolloClient({
        uri: 'https://magic-api-vercel.vercel.app/',
        cache: new InMemoryCache(),
      });

      const { data: _data, loading } = await client.query({
        query: GET_ARTICLES,
      });

      if (!_data)
        return {
          notFound: true,
        };

      if (_data && _data?.articles) {
        setData(_data.articles);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { isLoading, data };
};

export default useFetchArticles;
