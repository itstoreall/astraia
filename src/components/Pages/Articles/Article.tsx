'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import MDEditor from '@uiw/react-md-editor';
import Container from '@/components/Container';
import * as gu from '@/utils/global';
import s from './Articles.module.scss';

const Article = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const lsData = gu.getLS('++_astraia_article');
    if (!lsData) return;
    setTitle(lsData.title);
    setText(lsData.text);
  }, []);

  return (
    <main>
      <Container label={'alticle'}>
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
