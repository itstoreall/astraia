import { useEffect, useLayoutEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  IArticle,
  IArticleElement,
  IArticleHandler,
  IArticleInput,
} from '@/interfaces';
import { contrstDark, contrstLight, dark, light, middleGrey } from '@/theme';
import {
  ARTICLE_HEADER_FIELDS_ADD,
  ARTICLE_ELEMENTS_ADD,
  ARTICLE_HEADER_FIELDS_EDIT,
  ARTICLE_ELEMENTS_EDIT,
} from '@/constants';
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
import Reset from '@/assets/icons/Reset';
import Delete from '@/assets/icons/Delete';
import Button from '../Button';

const fls_add = ARTICLE_HEADER_FIELDS_ADD;
const art_add = ARTICLE_ELEMENTS_ADD;
const fls_edit = ARTICLE_HEADER_FIELDS_EDIT;
const art_edit = ARTICLE_ELEMENTS_EDIT;

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
  const [base64Holder, setBase64Holder] = useState<string>('');
  const [articleElements, setArticleElements] = useState<IArticleElement[]>([]);

  // ---

  const [isReset, setIsReset] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // const [isOpenModal, setIsOpenModal] = useState(false);

  console.log('isDelete', isDelete);

  const handleClickReset = () => {
    setIsReset(!isReset);
  };

  const handleClickDelete = () => {
    setIsDelete(!isDelete);
  };

  const { theme, setArticles } = useGlobalContext();

  const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);
  const [editArticle, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ARTICLE);

  const { refetch: getArticles } = useQuery(GET_ARTICLES);

  // console.log('');
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
    setBase64Holder('');
    // localStorage.removeItem(fls_edit);
    // localStorage.removeItem(art_edit);
  };

  useEffect(() => {
    localStorage.removeItem(fls_edit);
    localStorage.removeItem(art_edit);

    if (label === 'add') {
      const lsFields = JSON.parse(localStorage.getItem(fls_add) || 'null');
      const lsElements = JSON.parse(localStorage.getItem(art_add) || 'null');

      if (lsFields) {
        setTitle(lsFields.title);
        setDescription(lsFields.description);
      }

      if (lsElements) {
        setArticleElements(lsElements.articleElements);
      }
    }

    if (label === 'edit') {
      console.log(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (label === 'edit' && article) {
      const { articleElements, image } = JSON.parse(article.text);

      if (articleElements) {
        console.log('');
        console.log('2', base64Holder.slice(0, 50));
        console.log(2, 'isPreview', isPreview);
        console.log(2, 'isDisplayArticle', isDisplayArticle);

        setTitle(article.title);
        setDescription(article.description);
        setImageData(article.image);
        setArticleElements(articleElements);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

  useEffect(() => {
    if (label === 'edit') {
      if (isDisplayArticle) {
        console.log('');
        console.log('3', base64Holder.slice(0, 50));
        console.log(3, 'isPreview', isPreview);
        console.log(3, 'isDisplayArticle', isDisplayArticle);

        setIsPreview(true);
        setBase64Holder(imageData);
        localStorage.setItem(fls_edit, JSON.stringify({ title, description }));
        localStorage.setItem(art_edit, JSON.stringify({ articleElements }));
      }

      if (!isDisplayArticle) {
        console.log('');
        console.log('1', base64Holder.slice(0, 50));
        console.log(1, 'isPreview', isPreview);
        console.log(1, 'isDisplayArticle', isDisplayArticle);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisplayArticle]);

  useEffect(() => {
    // console.log('title', title);
    if (label === 'add') {
      if (title?.length || description?.length) {
        localStorage.setItem(fls_add, JSON.stringify({ title, description }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);

  useLayoutEffect(() => {
    if (label === 'add') {
      console.log(1);
      if (articleElements?.length)
        localStorage.setItem(art_add, JSON.stringify({ articleElements }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleElements]);

  useEffect(() => {
    if (label === 'add') {
      console.log(1);
      localStorage.removeItem(fls_add);
      localStorage.removeItem(art_add);
      clearStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReset]);

  const updateArticles = async () => {
    const updatedArticles = await getArticles();
    const { articles } = updatedArticles.data;
    articles && setArticles(articles);

    console.log('articles -->', articles);
  };

  const addArticleRequest = async (articleInput: IArticleInput) => {
    const { data } = await addArticle({ variables: { input: articleInput } });

    const { title } = data.addArticle;

    console.log('addArticle:', title);

    if (title) {
      setIsArticle(true);
      clearStates();
      updateArticles();
    }
  };

  const editArticleRequest = async (articleInput: IArticleInput) => {
    const id = article ? article.id : null;

    const { data } = await editArticle({ variables: { id, articleInput } });

    console.log('Article edited:', data.editArticle);

    if (data.editArticle) {
      setIsArticle(true);
      clearStates();
      updateArticles();
    }
  };

  const handleSubmit = async () => {
    const text = JSON.stringify({ articleElements });

    const articleInput = {
      image: imageData,
      title: title,
      description: description,
      author: 'Mila',
      text: text,
      tags: ['magic'],
    };

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

    try {
      label === 'add'
        ? addArticleRequest(articleInput)
        : label === 'edit'
        ? editArticleRequest(articleInput)
        : null;
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
        submitError,
        setSubmitError,
      }}
    >
      <div className={`${s.articleHandlerWrap} ${s[theme]}`}>
        {label === 'add' ? (
          <div
            className={`${s.actionButton} ${isReset ? s.isReset : ''}`}
            onClick={handleClickReset}
          >
            <Reset fill={middleGrey} />
          </div>
        ) : (
          <div
            className={`${s.actionButton} ${isDelete ? s.isDelete : ''}`}
            onClick={handleClickDelete}
          >
            {!isDelete ? (
              <Delete fill={middleGrey} el={'article'} />
            ) : (
              <div>
                <p>Удалить данную статью?</p>
                <div className={s.deleteButtonWrap}>
                  <Button fn={() => console.log('Click')}>Удалить</Button>
                  <Button fn={() => console.log('Click')}>Отменить</Button>
                </div>
              </div>
            )}
          </div>
        )}

        {!isArticle ? (
          <>
            <div className={s.articleHandler}>
              {!isDisplayArticle ? (
                <>
                  <HeaderFields article={article || null} label={label} />
                  <ArticleEditor article={article || null} label={label} />
                </>
              ) : (
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
                onClick={() => handleSubmit()}
                disabled={loading || editLoading}
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
              {editError && <p>Error: {editError.message}</p>}
            </div>
          </>
        ) : (
          <div className={s.success}>
            <div className={s.successContent}>
              <Success fill={theme === 'light' ? contrstLight : contrstDark} />
              <span>
                {label === 'add'
                  ? 'Статья успешно создана!'
                  : label === 'edit'
                  ? 'Статья успешно изменена!'
                  : null}
              </span>
            </div>
          </div>
        )}
      </div>
    </AddArticleContext.Provider>
  );
};

export default ArticleHandler;
