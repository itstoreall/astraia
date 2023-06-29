import { useEffect, useState } from 'react';
import { IArticleHandler } from '@/interfaces';
import { ARTICLE_HEADER_FIELDS } from '@/constants';
import { useAddArticleContext } from '@/context/AddArticleContext';
import s from './HeaderFields.module.scss';
import ImageUploader from '../ImageUploader';

const fls = ARTICLE_HEADER_FIELDS;

const HeaderFields = ({ article, label }: IArticleHandler) => {
  const {
    isArticle,
    setIsArticle,
    title,
    setTitle,
    description,
    setDescription,
    isDisplayArticle,
    isPreview,
    setIsPreview,
    submitError,
    setSubmitError,
  } = useAddArticleContext();

  // console.log('article 2', article);

  useEffect(() => {
    console.log('label', label);
    console.log(1);

    if (label === 'edit') return localStorage.removeItem(fls);

    const lsFields = JSON.parse(localStorage.getItem(fls) || 'null');
    // console.log('lsFields', lsFields);

    if (lsFields) {
      localStorage.removeItem(fls);

      setTitle(lsFields.title);
      setDescription(lsFields.description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const lsFields = JSON.parse(localStorage.getItem(fls) || 'null');

    console.log(2, lsFields);

    // console.log('article 3', article);
    if (article && !isPreview) {
      setTitle(article.title);
      setDescription(article.description);

      console.log('isDisplayArticle', isDisplayArticle);
      console.log('isPreview', isPreview);
    }

    return () => {
      localStorage.removeItem(fls);
      setIsPreview(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

  useEffect(() => {
    console.log(3);

    if (title?.length || description?.length) {
      localStorage.setItem(fls, JSON.stringify({ title, description }));
    } else {
      console.log(32);
      localStorage.removeItem(fls);
    }
  }, [title, description]);

  const handleInput = (event: any) => {
    submitError && setSubmitError('');

    isArticle && setIsArticle(false);
    const { name, value } = event.target;

    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);

    // console.log(`input ${name} value:`, value);
  };

  return (
    <div className={`${s.headerFields}`}>
      {isArticle ? (
        <p className={`${s.infoText}`}>{'Статья успешно создана!'}</p>
      ) : (
        <p className={`${s.infoText}`}>
          {'Заполните все поля и добавьте изображение'}
        </p>
      )}

      {!isArticle && (
        <div className={`${s.fields}`}>
          <input
            className={`${s.field} ${s.input}`}
            type='text'
            value={title}
            onChange={e => handleInput(e)}
            name='title'
            placeholder='Название статьи'
          />
          <textarea
            className={`${s.field} ${s.textarea}`}
            maxLength={525}
            value={description}
            onChange={e => handleInput(e)}
            name='description'
            placeholder='Краткое описание'
          />
        </div>
      )}

      <ImageUploader article={article || null} />
    </div>
  );
};

export default HeaderFields;
