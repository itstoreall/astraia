import { useRef, useState } from 'react';
import * as config from '../config';
import s from '../MDSimulator.module.scss';
import ReturnIcon from '@/assets/icons/ReturnIcon';
import MDEditor from '@uiw/react-md-editor';

const MDSContent = ({ fn }: { fn: () => void }) => {
  const [text, setText] = useState(config.initialState);

  const taRef = useRef<HTMLTextAreaElement>(null);

  const handleText = (val: string) => setText(val);

  return (
    <>
      <button className={s.return} onClick={fn}>
        <ReturnIcon />
      </button>

      <div className={s.preview}>
        <MDEditor.Markdown source={text} />
      </div>

      <div className={s.editor}>
        <textarea
          ref={taRef}
          className={s.textarea}
          value={text}
          onChange={e => handleText(e.target.value)}
        />
      </div>
    </>
  );
};

export default MDSContent;
