import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { IArticleElement, IArticleHandler } from '@/interfaces';
import { contrstDark, contrstLight } from '@/theme';
import { ARTICLE_ELEMENTS, ARTICLE_HEADER_FIELDS } from '@/constants';
import { useGlobalContext } from '@/context/GlobalContext';
import { AddArticleContext } from '@/context/AddArticleContext';
import ADD_ARTICLE from '@/gql/addArticle';
import EDIT_ARTICLE from '@/gql/editArticle';
import GET_ARTICLES from '@/gql/getArticles';
import s from './ArticleHandler.module.scss';
import HeaderFields from './HeaderFields/HeaderFields';
import ArticleEditor from './ArticleEditor/ArticleEditor';
import ArticleDetails from '../ArticleDetails';
import Success from '@/assets/icons/Success';

const fls = ARTICLE_HEADER_FIELDS;
const art = ARTICLE_ELEMENTS;

const ArticleHandler = ({ article, label }: IArticleHandler) => {
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
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [articleElements, setArticleElements] = useState<IArticleElement[]>([]);

  const { theme } = useGlobalContext();

  const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);
  const [editArticle, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ARTICLE);

  const { refetch: getArticles } = useQuery(GET_ARTICLES);

  console.log('');
  // console.log('article', article);
  // console.log('label', label);
  // console.log('isDisplayArticle', isDisplayArticle);

  const clearStates = () => {
    setImageData('');
    setTitle('');
    setDescription('');
    setAuthor('');
    setEditIndex(null);
    setTextareaValue('');
    setArticleElements([]);
    localStorage.removeItem(fls);
    localStorage.removeItem(art);
  };

  const updateArticles = async () => {
    // const updatedArticles = await getArticles();
    // const { articles } = updatedArticles.data;
    // articles && setArticles(articles);
    // const id = articles[articles?.length - 1].id;
    // navigate(`/admin/dashboard/articles/${id}`);
  };

  useEffect(() => {
    isDisplayArticle && setIsPreview(true);
  }, [isDisplayArticle]);

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

    Object.values(articleInput).find((el, idx) => {
      if (!el.length) isSubmitError = true;

      if (el.includes('articleElements')) {
        if (!articleElements?.length) isSubmitError = true;
      }

      console.log('el', idx, el, !el.length, isSubmitError);
    });

    if (isSubmitError)
      return setSubmitError('Проверьте правильность заполнения');

    // console.log('isSubmitError =', isSubmitError);

    // /* ----------- add article request
    try {
      const { data } = await addArticle({ variables: { input: articleInput } });

      const { title } = data.addArticle;

      console.log('addArticle:', title);

      if (title) {
        setIsArticle(true);
        clearStates();
        updateArticles();
      }
    } catch (e) {
      console.error(e);
    }
    // */
  };

  const handleSubmitEdit = async () => {
    // event.preventDefault();

    const text = JSON.stringify({ articleElements });

    const id = article ? article.id : null;
    const articleInput = {
      image: imageData,
      title: title,
      description: description,
      author: 'Mila',
      text: text,
      tags: ['magic'],
    };

    try {
      const { data } = await editArticle({ variables: { id, articleInput } });

      console.log('Article edited:', data.editArticle);

      if (data.editArticle) {
        setIsArticle(true);
        clearStates();
        updateArticles();
      }

      // navigate(`/admin/dashboard/articles/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
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
        isPreview,
        setIsPreview,
        articleElements,
        setArticleElements,
        handleSubmit,
        submitError,
        setSubmitError,
      }}
    >
      <div className={`${s.articleHandlerWrap} ${s[theme]}`}>
        {!isArticle ? (
          <>
            <div className={s.articleHandler}>
              {!isDisplayArticle ? (
                // <div className={s.addArticle}>
                <>
                  <HeaderFields article={article || null} label={label} />
                  <ArticleEditor article={article || null} label={label} />
                </>
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
              <button
                type='button'
                onClick={() =>
                  label === 'edit'
                    ? handleSubmitEdit()
                    : label === 'add'
                    ? handleSubmit()
                    : null
                }
                disabled={loading}
                // style={{ backgroundColor: 'teal' }}
                // hover={{ backgroundColor: 'tomato' }}
              >
                Сохранить
              </button>

              <button onClick={() => setIsDisplayArticle(!isDisplayArticle)}>
                {isDisplayArticle ? 'Редактор' : 'Предпросмотр'}
              </button>
            </div>
            <div className={s.submitErrors}>
              {submitError && <p>{submitError}</p>}
              {error && <p>Error: {error.message}</p>}
            </div>
          </>
        ) : (
          <div className={s.success}>
            <div className={s.successContent}>
              <Success fill={theme === 'light' ? contrstLight : contrstDark} />
              <span>Статья успешно создана!</span>
            </div>
          </div>
        )}
        {/* <HeaderFields />
      <ArticleEditor /> */}
      </div>
    </AddArticleContext.Provider>
  );
};

export default ArticleHandler;
