'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import defaultImage from '@/assets/images/defaultImage.jpg';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import s from './Dashboard.module.scss';

const Dashboard = () => {
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(gc.system.imgBaseUrl);
  const [text, setText] = useState('Text');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  useEffect(() => {
    gu.setLS('++_astraia_article', { title, text });
  }, [title, text]);

  const handleTitle = (title: string) => setTitle(title);
  const handleImage = (url: string) => setImage(url);
  const handleText = (text: string) => setText(text);

  // const defaultImagePath = `_next/static/media/defaultImage.c592ac5f.jpg`

  return (
    <section className={s.dashboard}>
      <div className={s.hero}>
        <div className={s.thumb}>
          <Image
            src={image ? image : defaultImage}
            className={s.heroImage}
            layout='responsive'
            width={900}
            height={390}
            alt='Astraia picture'
            onClick={() => setIsImageInput(true)}
            // unoptimized
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
