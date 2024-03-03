/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import useViewportWidth from '@/hooks/useViewportWidth';
import useQuery from '@/GraphQL/hooks/useQuery';
import { Textarea } from './types';
import * as u from './utils';
import s from './Textarea.module.scss';

const Textarea: Textarea = ({ text, handleText }) => {
  const taRef = useRef<HTMLTextAreaElement>(null);
  const viewport = useViewportWidth();
  const data = useQuery();

  const ta = taRef.current;

  /*
  const fetchArticles = async () => {
    const articles = await data.all();
    console.log('articles', articles);
  };
  */

  /*
  const getArticle = async () => {
    const article = await data.byId('65e3a6fad5be3401d19a6c78');
    console.log('article', article);
  };
  */

  /*
  const addArticle = async () => {
    const res = await data.add();
    console.log('res', res);
  };
  */

  const updateArticle = async () => {
    const res = await data.edit('65e466bc469e1f8e204bd741');
    console.log('res', res);
  };

  const delArticle = async () => {
    const res = await data.del('65e4c87e1305bb9c9b18595c');
    console.log('res', res);
  };

  useEffect(() => {
    // getServerArticle('65e3284721d95d96198b9936');
    // addArticle();
    // updateArticle();
    delArticle();
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
