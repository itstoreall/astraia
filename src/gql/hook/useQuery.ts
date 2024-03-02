import { useLazyQuery } from '@apollo/client';
import GET_ARTICLES from '../getArticles';

const useQuery = () => {
  const [getArticles, { loading }] = useLazyQuery(GET_ARTICLES);

  const fetchArticles = async () => {
    try {
      const { data } = await getArticles({
        variables: { blog: 'astraia' }
      });
      if (data) {
        console.log('data ===>', data);
        return { status: 'success', data: data.articles };
      }
    } catch (e) {
      console.error(e);
      return { status: 'failed', data: null };
    } finally {
      console.log('Done!');
    }
  };

  const query = {
    articles: { get: fetchArticles, loading }
  };

  return query;
};

export default useQuery;
