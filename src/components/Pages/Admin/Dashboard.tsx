import { useState } from 'react';
// import TextareaAutosize from 'react-textarea-autosize';
// import Container from '@/components/Container';
import s from './Admin.module.scss';
import MDEditor from '@uiw/react-md-editor';

const Dashboard = () => {
  const [textValue, setTextValue] = useState('');
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handleInput = (e: { target: { value: string } }) =>
    setTextValue(e.target.value);

  const getText = () => textValue;

  return (
    <section className={s.dashboard}>
      <div className={s.preview}>
        {isPreview && <MDEditor.Markdown source={getText()} />}
      </div>

      <div>
        <textarea className={s.textarea} onChange={e => handleInput(e)} />
      </div>

      <div onClick={() => setIsPreview(!isPreview)}>Preview</div>
    </section>
  );
};

export default Dashboard;
