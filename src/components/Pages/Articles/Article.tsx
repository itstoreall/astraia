/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import MDEditor from '@uiw/react-md-editor';
import { useGlobalState } from '@/Global/context/use';
import { Article } from '@/Global/types';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import s from './Articles.module.scss';

const { lsArticleKey, defaultImageUrl } = gc.system;

const Article = ({ article }: { article: Article }) => {
  // const [prevHeight, setPrevHeight] = useState<number | null>(null);
  const [textAlign, setTextAlign] = useState<string>('');

  const { app } = useGlobalState();

  // const h1Ref = useRef<HTMLHeadingElement | null>(null);

  // const h1 = h1Ref.current;

  // console.log('h1', h1);

  useEffect(() => {
    app.set(app.config.ARTICLE);
    const lsData = gu.getLS(lsArticleKey);
    if (!lsData) return;
  }, []);

  useEffect(() => {
    console.log(article.title?.split(' ').length);
    article.title?.split(' ').length <= 3 && setTextAlign('center');
  }, []);

  /*
  useEffect(() => {
    const checkAndLogHeight = () => {
      const currentHeight = h1Ref.current?.offsetHeight;
      if (currentHeight && currentHeight !== prevHeight) {
        console.log('h1Ref height:', currentHeight);
        setPrevHeight(currentHeight);
      }
    };

    checkAndLogHeight();
    window.addEventListener('resize', checkAndLogHeight);
    return () => window.removeEventListener('resize', checkAndLogHeight);
  }, [prevHeight]);
  */

  /*
  useEffect(() => {
    // Your existing useEffect code...

    // Ensure the element is mounted
    if (h1) {
      console.log('h1Ref height:', h1.offsetHeight);
    }
  }, [h1?.offsetHeight]);
  */

  if (!article) return null;

  const imageUrl = article.image ? article.image : defaultImageUrl;

  return (
    <Navigation isActive={true}>
      <main>
        <Container label={gc.page.article.label}>
          <section className={s.dashboard}>
            <div className={s.hero}>
              <Image
                src={imageUrl}
                className={s.heroImage}
                fill
                priority={true}
                alt={article.title}
              />

              <h1 className={`${s.title} ${s[textAlign]}`}>{article.title}</h1>
            </div>

            <div className={s.textBlock}>
              <MDEditor.Markdown source={article.text} />
            </div>
          </section>
        </Container>
      </main>
    </Navigation>
  );
};

export default Article;
