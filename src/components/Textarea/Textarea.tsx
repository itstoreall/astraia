import { ReactElement, useEffect, useRef } from 'react';
import s from './Textarea.module.scss';

export type Textarea = (props: {
  text: string;
  handleText: (s: string) => void;
}) => ReactElement;

const Textarea: Textarea = ({ text, handleText }) => {
  const taRef = useRef<HTMLTextAreaElement>(null);
  const ta = taRef.current;

  useEffect(() => {
    if (ta) {
      if (!text) ta.style.height = 'auto';
      ta.style.height = `${ta.scrollHeight}px`;
    }
  }, [ta, text]);

  return (
    <textarea
      ref={taRef}
      className={s.textarea}
      value={text}
      onChange={e => handleText(e.target.value)}
      placeholder='Text...'
    />
  );
};

export default Textarea;
