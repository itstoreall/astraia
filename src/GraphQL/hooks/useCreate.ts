import { useLazyQuery, useMutation } from '@apollo/client';
import ADD_ARTICLE from '../gql/addArtilce';
import * as gc from '@/config/global';
import * as config from '../config';

const { blog } = gc.system;
const { success, errRes } = config.query;

const useCreate = () => {
  // const [addArticle, { loading }] = useLazyQuery(ADD_ARTICLE);
  const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);

  const createArticle = async () => {
    try {
      const { data } = await addArticle({
        variables: {
          blog,
          input: {
            title: 'Title 1',
            description: 'Description 1',
            text: 'text 1',
            author: 'author 1',
            // #image
            tags: ['tag1']
          }
        }
      });
      if (data) return { status: success, data: data };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('Done!');
    }
  };

  return { create: createArticle, loading };
};

export default useCreate;
