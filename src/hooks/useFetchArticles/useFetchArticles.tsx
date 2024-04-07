/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalState } from '@/Global/context/use';
import useQuery from '@/GraphQL/hooks/useQuery';
import * as gc from '@/config/global';

const { published: pub } = gc.articleStatus;

const useFetchArticles = (label: string | null) => {
  const { data } = useGlobalState();
  const query = useQuery();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = async () => {
    const res = await (label === pub ? query.published() : query.all());
    res?.success && data.set(res.data);
  };

  return { articles: data.articles, refetch };
};

export default useFetchArticles;
