/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalState } from '@/Global/context/use';
import useQuery from '@/GraphQL/hooks/useQuery';
import { useEffect } from 'react';

const useFetchArticles = () => {
  const { data } = useGlobalState();
  const query = useQuery();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = async () => {
    const res = await query.all();
    console.log('res', res);
    res?.success && data.set(res.data);
  };

  return { articles: data.articles, refetch };
};

export default useFetchArticles;
