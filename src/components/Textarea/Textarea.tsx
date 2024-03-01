/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import useViewportWidth from '@/hooks/useViewportWidth';
import { Textarea } from './types';
import * as u from './utils';
import s from './Textarea.module.scss';
import { useLazyQuery } from '@apollo/client';
import GET_ARTICLES from '@/gql/getArticles';

const Textarea: Textarea = ({ text, handleText }) => {
  const [getArticles, { loading }] = useLazyQuery(GET_ARTICLES);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const viewport = useViewportWidth();

  const ta = taRef.current;

  const fetchArticles = async () => {
    try {
      const { data } = await getArticles({ variables: { blog: 'astraia' } });
      if (data) console.log('data ===>', data);
    } catch (e) {
      console.error(e);
    } finally {
      console.log('Done!');
    }
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
      placeholder={loading ? 'Loading...' : 'Text...'}
    />
  );
};

export default Textarea;
