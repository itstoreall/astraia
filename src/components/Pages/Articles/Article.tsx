'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import MDEditor from '@uiw/react-md-editor';
import Container from '@/components/Container';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import s from './Articles.module.scss';

const { defaultImageUrl } = gc.system;

const Article = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(defaultImageUrl);
  const [text, setText] = useState('');

  useEffect(() => {
    const lsData = gu.getLS('++_astraia_article');
    if (!lsData) return;
    setTitle(lsData.title);
    setImage(lsData.image);
    setText(lsData.text);
  }, []);

  return (
    <main>
      <Container label={'alticle'}>
        <section className={s.dashboard}>
          <div className={s.hero}>
            <Image
              src={image ? image : defaultImageUrl}
              className={s.heroImage}
              fill
              alt='Astraia picture'
            />

            <h1 className={s.title}>{title}</h1>
          </div>

          <div className={s.textBlock}>
            <MDEditor.Markdown source={text} />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Article;
