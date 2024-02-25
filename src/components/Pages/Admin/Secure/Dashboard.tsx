'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as gu from '@/utils/global';
import s from './Dashboard.module.scss';

const Dashboard = () => {
  const [title, setTitle] = useState('Title');
  const [text, setText] = useState('Text');
  const [isTitleInput, setIsTitleInput] = useState(false);

  useEffect(() => {
    gu.setLS('++_astraia_article', { title, text });
  }, [title, text]);

  const handleTitle = (e: { target: { value: string } }) =>
    setTitle(e.target.value);

  const handleText = (e: { target: { value: string } }) =>
    setText(e.target.value);

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

        <h1 className={s.title} onClick={() => setIsTitleInput(true)}>
          {title}
        </h1>

        {isTitleInput && (
          <input
            className={s.titleInput}
            value={title}
            onChange={e => handleTitle(e)}
            onBlur={() => setIsTitleInput(false)}
          />
        )}
      </div>

      <div className={s.textBlock}>
        <textarea
          className={s.textarea}
          value={text}
          onChange={e => handleText(e)}
        />
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

// Статья про котиков и собачек, корорьіе бегают, гавкают и радуются жизни
