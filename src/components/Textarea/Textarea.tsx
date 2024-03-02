/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import useViewportWidth from '@/hooks/useViewportWidth';
import { Textarea } from './types';
import * as u from './utils';
import s from './Textarea.module.scss';
import useQuery from '@/gql/hook/useQuery';

const Textarea: Textarea = ({ text, handleText }) => {
  const { articles: data } = useQuery();
  const taRef = useRef<HTMLTextAreaElement>(null);
  const viewport = useViewportWidth();

  const ta = taRef.current;

  const fetchArticles = async () => {
    const articles = await data.get();
    console.log('articles', articles);
  };

  useEffect(() => {
    fetchArticles();
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
      placeholder={data.loading ? 'Loading...' : 'Text...'}
    />
  );
};

export default Textarea;
