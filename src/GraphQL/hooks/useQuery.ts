import { useLazyQuery, useMutation } from '@apollo/client';
import GET_ARTICLES from '../gql/getArticles';
import GET_BY_ID from '../gql/getArticleById';
import ADD_ARTICLE from '../gql/addArtilce';
import EDIT_ARTICLE from '../gql/editArticle';
import DEL_ARTICLE from '../gql/deleteArticle';
import * as gc from '@/config/global';
import * as config from '../config';

const { blog } = gc.system;
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
  const createArticle = async () => {
    try {
      const { data } = await addArticle({
        variables: {
          blog,
          input: {
            title: 'T7',
            description: 'Description 7',
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            author: 'author 7',
            image:
              'https://res.cloudinary.com/astraia/image/upload/v1687003861/cld-sample-2.jpg',
            tags: ['tag7']
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
  const updateArticle = async (id: string) => {
    try {
      const { data } = await editArticle({
        variables: {
          blog,
          id,
          articleInput: {
            title: 'Title 6',
            description: 'Description 6',
            text: 'text 6',
            author: 'author 6',
            image:
              'https://res.cloudinary.com/astraia/image/upload/v1687003850/samples/food/spices.jpg',
            tags: ['tag1', 'tag4']
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
