import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import router from 'next/router';
// import Image from 'next/image';
import { IArticleElement } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import { AddArticleContext } from '@/context/AddArticleContext';
// import useVerification from '@/hooks/useVerification';
import styles from '../../page.module.scss';
import s from '../admin.module.scss';
import Crumbs from '@/components/Crumbs';
// import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
// import GET_ARTICLES from '@/gql/getArticles';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
import ImageUploader from '@/components/Add/ImageUploader/ImageUploader';
import HeaderFields from '@/components/Add/HeaderFields/HeaderFields';
import ArticleEditor from '@/components/Add/ArticleEditor/ArticleEditor';
import useIsAdmin from '@/hooks/useIsAdmin';
import ADD_ARTICLE from '@/gql/addArticle';
import GET_ARTICLES from '@/gql/getArticles';
import ArticleDetails from '@/components/ArticleDetails';
import Button from '@/components/Button';
import Add from '@/components/Add';
// import useProportion from '@/hooks/useProportion';

const AddPage = () => {
  useIsAdmin('/admin');
  const [isArticle, setIsArticle] = useState<boolean>(false);
  const [imageData, setImageData] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [author, setAuthor] = useState<string>('Mila');
  // const [tags, setTags] = useState<string[]>(['magic']);
  const [submitError, setSubmitError] = useState<string>('');

  // ---

  const [textareaValue, setTextareaValue] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isDisplayArticle, setIsDisplayArticle] = useState<boolean>(false);
  const [articleElements, setArticleElements] = useState<IArticleElement[]>([]);

  const { theme, access } = useGlobalContext();
  // const { width, height } = useProportion(900, 450, 300);
  const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);
  const { refetch: getArticles } = useQuery(GET_ARTICLES);

  const clearStates = () => {
    setImageData('');
    setTitle('');
    setDescription('');
    setAuthor('');
    setEditIndex(null);
    setTextareaValue('');
    setArticleElements([]);
  };

  const updateArticles = async () => {
    const updatedArticles = await getArticles();

    const { articles } = updatedArticles.data;

    // articles && setArticles(articles);
    const id = articles[articles?.length - 1].id;
    // navigate(`/admin/dashboard/articles/${id}`);
  };

  const handleSubmit = async () => {
    // event.preventDefault();

    const text = JSON.stringify({ articleElements });

    const articleInput = {
      image: imageData,
      title: title,
      description: description,
      author: 'Mila',
      // text: articleElements,
      text: text,
      tags: ['magic'],
    };

    // console.log('articleInput --->', articleInput);

    let isSubmitError: boolean = false;

    console.log(
      'articleInput',
      Object.values(articleInput).find((el, idx) => {
        console.log('el', idx, el, !el.length);
        if (!el.length) isSubmitError = true;
      })
    );

    if (isSubmitError)
      return setSubmitError('Проверьте правильность заполнения');

    // console.log('isSubmitError =', isSubmitError);

    try {
      const { data } = await addArticle({ variables: { input: articleInput } });

      const { title } = data.addArticle;

      // console.log('addArticle:', title);

      if (title) {
        setIsArticle(true);
        clearStates();
        updateArticles();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // console.log('submitError add', submitError);

  return (
    <>
      {access ? (
        <AddArticleContext.Provider
          value={{
            isArticle,
            setIsArticle,
            imageData,
            setImageData,
            title,
            setTitle,
            description,
            setDescription,
            author,
            setAuthor,
            textareaValue,
            setTextareaValue,
            editIndex,
            setEditIndex,
            isDisplayArticle,
            setIsDisplayArticle,
            articleElements,
            setArticleElements,
            handleSubmit,
            submitError,
            setSubmitError,
          }}
        >
          <section className={`${styles.page} ${styles[theme]}`}>
            <Crumbs routes={['dashboard', 'add']}>
              <h2 className={styles.title}>{'Новая статья'}</h2>
            </Crumbs>

            <article className={styles.article}>
              <div className={s.addArticleWrap}>
                {!isDisplayArticle ? (
                  // <div className={s.addArticle}>
                  <Add />
                ) : (
                  // </div>
                  <div>
                    <span>Предпросмотр статьи</span>
                    <ArticleDetails
                      imageData={imageData}
                      title={title}
                      description={description}
                      author={author}
                      articleElements={articleElements}
                    />
                  </div>
                )}
              </div>

              <div className={s.mainButtons}>
                <Button
                  type='button'
                  fn={() => handleSubmit()}
                  disabled={loading}
                  // style={{ backgroundColor: 'teal' }}
                  // hover={{ backgroundColor: 'tomato' }}
                >
                  Сохранить
                </Button>

                {submitError && <p>{submitError}</p>}
                {error && <p>Error: {error.message}</p>}
                <Button fn={() => setIsDisplayArticle(!isDisplayArticle)}>
                  {isDisplayArticle ? 'Редактор' : 'Предпросмотр'}
                </Button>
              </div>
            </article>
          </section>
        </AddArticleContext.Provider>
      ) : (
        'Verification (admin)...'
      )}
    </>
  );
};

export default AddPage;
