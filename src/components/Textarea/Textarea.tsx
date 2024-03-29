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
