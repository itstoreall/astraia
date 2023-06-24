import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GET_ARTICLE_BY_ID from '@/gql/getArticleById';

const useFetchArticleById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = new ApolloClient({
        uri: 'https://magic-api-vercel.vercel.app/',
        cache: new InMemoryCache(),
      });

      const { data: _data } = await client.query({
        query: GET_ARTICLE_BY_ID,
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

export default useFetchArticleById;
