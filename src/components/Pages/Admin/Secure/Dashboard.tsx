'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import s from './Dashboard.module.scss';

const { defaultImageUrl } = gc.system;

const Dashboard = () => {
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(defaultImageUrl);
  const [text, setText] = useState('Text');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  useEffect(() => {
    gu.setLS('++_astraia_article', { title, text });
  }, [title, text]);

  const urlValidate = (url: string) => {
    if (url && url?.slice(0, 8).includes('https://')) {
      return url.slice(-5).includes('.webp') ||
        url.slice(-5).includes('.jpg') ||
        url.slice(-5).includes('.jpeg') ||
        url.slice(-5).includes('.png')
        ? url
        : '';
    } else return '';
  };

  const handleTitle = (title: string) => setTitle(title);
  const handleImage = (url: string) => setImage(urlValidate(url) || '');
  const handleText = (text: string) => setText(text);

  return (
    <section className={s.dashboard}>
      <div className={s.hero}>
        <div className={s.thumb}>
          <Image
            src={image ? image : defaultImageUrl}
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
