'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import s from './Dashboard.module.scss';

const { imgBaseUrl } = gc.system;

const Dashboard = () => {
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(imgBaseUrl);
  const [text, setText] = useState('Text');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  useEffect(() => {
    gu.setLS('++_astraia_article', { title, text });
  }, [title, text]);

  const handleTitle = (title: string) => setTitle(title);
  const handleImage = (url: string) => setImage(url ? url : imgBaseUrl);
  const handleText = (text: string) => setText(text);

  return (
    <section className={s.dashboard}>
      <div className={s.hero}>
        <div className={s.thumb}>
          <Image
            src={image}
            // src='https://bafkreifwcq6raou6arxbb4ooo6mqnwc6rudcnxqnvzy65vzqt4wq7qkwhe.ipfs.w3s.link'
            // src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
            className={s.heroImage}
            layout='responsive'
            width={900}
            height={390}
            alt='Picture of the author'
            onClick={() => setIsImageInput(true)}
          />
        </div>

        <h1 className={s.title} onClick={() => setIsTitleInput(true)}>
          {title}
        </h1>

        {isTitleInput && (
          <input
            className={s.titleInput}
            value={title}
            onChange={e => handleTitle(e.target.value)}
            onBlur={() => setIsTitleInput(false)}
          />
        )}

        {isImageInput && (
          <input
            className={s.imageInput}
            value={image}
            onChange={e => handleImage(e.target.value)}
            onBlur={() => setIsImageInput(false)}
          />
        )}
      </div>

      <div className={s.textBlock}>
        <textarea
          className={s.textarea}
          value={text}
          onChange={e => handleText(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Dashboard;

// Статья про котиков и собачек, корорьіе бегают, гавкают и радуются жизни
