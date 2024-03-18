import GET_BY_ID from '../gql/getArticleById';
import getServerClient from './getClient';
import * as gc from '@/config/global';

const { label: astraia } = gc.system;

export const getServerArticle = async (id: string) => {
  const { data } = await getServerClient().query({
    query: GET_BY_ID,
    variables: { blog: astraia, id },
    context: {
      fetchOptions: { cache: 'no-store' }
    }
  });

  if (data) {
    console.log('data');
    return data?.getArticleById;
  } else return null;
};
