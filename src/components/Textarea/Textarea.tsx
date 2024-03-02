/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import useViewportWidth from '@/hooks/useViewportWidth';
import { Textarea } from './types';
import * as u from './utils';
import s from './Textarea.module.scss';
import useArticles from '@/GraphQL/hooks/useArticles';
import useCreate from '@/GraphQL/hooks/useCreate';
import useQuery from '@/GraphQL/hooks/useQuery';

const Textarea: Textarea = ({ text, handleText }) => {
  // const [addArticle, { loading: addLoad, error: addErr }] =
  //   useMutation(ADD_ARTICLE);

  // const data = useArticles();
  const data = useQuery();
  // const { create, loading } = useCreate();
  const taRef = useRef<HTMLTextAreaElement>(null);
  const viewport = useViewportWidth();

  const ta = taRef.current;

  const fetchArticles = async () => {
    const articles = await data.all();
    console.log('articles', articles);
  };

  const getArticle = async () => {
    const article = await data.byId('65e3284721d95d96198b9936');
    console.log('article', article);
  };

  const addArticle = async () => {
    const res = await data.add();
    console.log('res', res);
  };

  const updateArticle = async () => {
    const res = await data.edit('65e3284721d95d96198b9936');
    console.log('res', res);
  };

  const delArticle = async () => {
    const res = await data.del('65e3284721d95d96198b9936');
    console.log('res', res);
  };

  // console.log('add loading', loading);

  useEffect(() => {
    // fetchArticles();
    getArticle();
    // addArticle();
    // updateArticle();
    // delArticle();
  }, []);

  // ---

  useEffect(() => {
    if (!ta) return;
    text ? u.updateTaHeight(ta) : u.resetTaHeight(ta);
  }, [text]);

  useEffect(() => {
    if (!ta) return;
    u.resetTaHeight(ta);
    u.updateTaHeight(ta);
  }, [viewport.width]);

  return (
    <textarea
      ref={taRef}
      className={s.textarea}
      value={text}
      onChange={e => handleText(e.target.value)}
      placeholder={data.loading.all ? 'Loading...' : 'Text...'}
    />
  );
};

export default Textarea;
