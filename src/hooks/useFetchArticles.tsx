import { useEffect, useState } from 'react';
import GET_ARTICLES from '@/gql/getArticles';
import client from '@/utils/apolloClient';

const useFetchArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const client = new ApolloClient({
      //   uri: 'https://magic-api-vercel.vercel.app/',
      //   cache: new InMemoryCache(),
      // });

      const { data: _data } = await client.query({
        query: GET_ARTICLES,
      });

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
