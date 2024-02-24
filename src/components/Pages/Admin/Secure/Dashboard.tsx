'use client';
import { useState } from 'react';
import Image from 'next/image';
import s from './Dashboard.module.scss';
// import MDEditor from '@uiw/react-md-editor';

const Dashboard = () => {
  const [textValue, setTextValue] = useState('');
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handleInput = (e: { target: { value: string } }) =>
    setTextValue(e.target.value);

  const getText = () => textValue;

  return (
    <section className={s.dashboard}>
      <div className={s.hero}>
        <div className={s.thumb}>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
            className={s.heroImage}
            layout='responsive'
            width={900}
            height={390}
            alt='Picture of the author'
          />
        </div>
        <h1 className={s.title}>
          Title dweedwedwedw dwedwedwed dwed dwe dwedwedw dwedwe dwedw dwedwed
        </h1>
      </div>
      <div className={s.article}>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </div>
    </section>
  );
};

export default Dashboard;

/*
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
*/
