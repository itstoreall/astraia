import { useLazyQuery } from '@apollo/client';
import GET_ARTICLES from '../gql/getArticles';
import * as gc from '@/config/global';
import * as config from '../config';

const { blog } = gc.system;
const { success, errRes } = config.query;

const useArticles = () => {
  const [getArticles, { loading }] = useLazyQuery(GET_ARTICLES);

  const fetchArticles = async () => {
    try {
      const { data } = await getArticles({ variables: { blog } });
      if (data) return { status: success, data: data.articles };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('Done!');
    }
  };

  return { get: fetchArticles, loading };
};

export default useArticles;
