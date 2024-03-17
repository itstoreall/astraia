import { useRef, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useGlobalState } from '@/Global/context/use';
import * as config from '../config';
import ReturnIcon from '@/assets/icons/ReturnIcon';
import s from '../Modal.module.scss';

export type MDSimulatorProps = {
  action: () => void;
};

const MDSimulator = ({ action }: MDSimulatorProps) => {
  const [text, setText] = useState(config.initialState);

  const { modal } = useGlobalState();

  const taRef = useRef<HTMLTextAreaElement>(null);

  const handleText = (val: string) => setText(val);

  const closeModal = () => {
    modal.setContent('');
    modal.set(false);
  };

  return (
    <div className={`${s.contentBlock} ${s.mdSimulator}`}>
      <button className={s.return} onClick={closeModal}>
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
    </div>
  );
};

export default MDSimulator;
