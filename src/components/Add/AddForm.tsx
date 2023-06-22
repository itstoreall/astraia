import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Image from 'next/image';
import s from './Add.module.scss';
// import { useNavigate } from 'react-router-dom';
import ADD_ARTICLE from '@/gql/addArticle';
import GET_ARTICLES from '@/gql/getArticles';
import base64Converter from '../../utils/uploadImageHandler';
import useProportion from '@/hooks/useProportion';
import Button from '../Button/Button';
import { useAddArticleContext } from '@/context/AddArticleContext';
// import { useGlobalContext } from '../../../context/GlobalContext';
// import base64Converter from '../../../utils/base64Converter';
// import DragAndDrop from './UploadImage/ImageUploader';

const AddForm = () => {
  const {
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
    // articleElements,
    // setArticleElements,
    handleSubmit,
  } = useAddArticleContext();

  // const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);
  // const { refetch: getArticles } = useQuery(GET_ARTICLES);
  const { width, height } = useProportion(900, 450, 300);
  // const { setArticles } = useGlobalContext();
  // const navigate = useNavigate();

  // const [isArticle, setIsArticle] = useState<boolean>(false);
  // const [title, setTitle] = useState<string>('');
  // const [description, setDescription] = useState<string>('');
  // const [text, setText] = useState<string>('');
  // const [author, setAuthor] = useState<string>('');
  // // const [tags, setTags] = useState<string[]>(['magic']);
  // const [imageData, setImageData] = useState<string>('');

  // const clearStates = () => {
  //   setTitle('');
  //   setDescription('');
  //   setText('');
  //   setAuthor('');
  //   setImageData('');
  // };

  // const updateArticles = async () => {
  //   const updatedArticles = await getArticles();

  //   const { articles } = updatedArticles.data;

  //   // articles && setArticles(articles);
  //   const id = articles[articles?.length - 1].id;
  //   // navigate(`/admin/dashboard/articles/${id}`);
  // };

  const handleInput = (event: any) => {
    isArticle && setIsArticle(false);
    const { name, value } = event.target;

    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);
    // name === 'text' && setText(value);
    name === 'author' && setAuthor(value);

    console.log(`input ${name} value:`, value);
  };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  //   const articleInput = {
  //     title: title,
  //     description: description,
  //     text: text,
  //     author: author,
  //     image: imageData,
  //     tags: ['magic'],
  //   };

  //   // console.log('articleInput --->', articleInput);

  //   try {
  //     const { data } = await addArticle({ variables: { input: articleInput } });

  //     const { title } = data.addArticle;

  //     // console.log('addArticle:', title);

  //     if (title) {
  //       setIsArticle(true);
  //       clearStates();
  //       updateArticles();
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className={s.addFormWrap}>
      {isArticle ? (
        <p>{'Article was created'}</p>
      ) : (
        <p>{'Fill in the fields and click Submit button'}</p>
      )}
      {!isArticle && (
        <>
          {imageData && (
            <div className={s.thumb}>
              <Image
                src={imageData}
                alt='Uploaded'
                width={width}
                height={height}
              />
            </div>
          )}
          <form className={s.addForm} onSubmit={handleSubmit}>
            <label>
              Choose File
              <input
                className={s.fileInput}
                type='file'
                accept='.jpg, .jpeg, .png'
                onChange={base64Converter(setImageData)}
              />
            </label>

            <input
              type='text'
              value={title}
              onChange={e => handleInput(e)}
              name='title'
              placeholder='Title'
            />
            <input
              type='text'
              value={description}
              onChange={e => handleInput(e)}
              name='description'
              placeholder='Description'
            />
            {/* <input
              type='text'
              value={text}
              onChange={e => handleInput(e)}
              name='text'
              placeholder='Article text'
            /> */}
            <input
              type='text'
              value={author}
              onChange={e => handleInput(e)}
              name='author'
              placeholder='Author'
            />
            {/* <Button type='submit' disabled={loading}>
              Submit
            </Button>
            {error && <p>Error: {error.message}</p>} */}
          </form>
        </>
      )}
    </div>
  );
};

export default AddForm;
