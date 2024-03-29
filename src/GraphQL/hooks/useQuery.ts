import { useLazyQuery, useMutation } from '@apollo/client';
import GET_ARTICLES from '../gql/getArticles';
import GET_BY_ID from '../gql/getArticleById';
import ADD_ARTICLE from '../gql/addArtilce';
import EDIT_ARTICLE from '../gql/editArticle';
import DEL_ARTICLE from '../gql/deleteArticle';
import * as gc from '@/config/global';
import * as config from '../config';

export type AddArticleArgs = { title: string; image: string; text: string };

const { label: blog } = gc.system;
const { errRes } = config.query;

const useQuery = () => {
  const [getArticles, { loading: lGA }] = useLazyQuery(GET_ARTICLES);
  const [getArticleById, { loading: lBI }] = useLazyQuery(GET_BY_ID);
  const [addArticle, { loading: lAA }] = useMutation(ADD_ARTICLE);
  const [editArticle, { loading: lEA }] = useMutation(EDIT_ARTICLE);
  const [delArticle, { loading: lDA }] = useMutation(DEL_ARTICLE);

  // GET All:
  const fetchArticles = async () => {
    try {
      const { data } = await getArticles({ variables: { blog } });
      if (data) return { success: true, data: data.articles };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('Fetching Done!');
    }
  };

  // GET by ID:
  const getById = async (id: string) => {
    try {
      const { data } = await getArticleById({ variables: { blog, id } });
      if (data) return { success: true, data: data.getArticleById };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('GetById Done!');
    }
  };

  // POST create:
  const createArticle = async (args: AddArticleArgs) => {
    try {
      const { data } = await addArticle({
        variables: {
          blog,
          input: {
            title: args.title,
            description: '',
            text: args.text,
            author: 'Mila',
            image: args.image,
            tags: ['magic']
          }
        }
      });
      if (data) return { success: true, data: data };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('Creating Done!');
    }
  };

  // POST update:
  const updateArticle = async (id: string, args: AddArticleArgs) => {
    try {
      const { data } = await editArticle({
        variables: {
          blog,
          id,
          articleInput: {
            title: args.title,
            description: '',
            text: args.text,
            author: 'Mila',
            image: args.image,
            tags: ['magic', 'yellow']
          }
        }
      });
      if (data) return { success: true, data: data };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('Updating Done!');
    }
  };

  // POST delete:
  const removeArticle = async (id: string) => {
    try {
      const { data } = await delArticle({ variables: { blog, id } });
      if (data) return { success: true, data: data.deleteArticle };
    } catch (e) {
      console.error(e);
      return errRes;
    } finally {
      console.log('Removing Done!');
    }
  };

  return {
    all: fetchArticles,
    byId: getById,
    add: createArticle,
    edit: updateArticle,
    del: removeArticle,
    loading: { all: lGA, add: lAA, edit: lEA, dal: lDA, byId: lBI }
  };
};

export default useQuery;
