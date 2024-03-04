'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import MDEditor from '@uiw/react-md-editor';
import Container from '@/components/Container';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import { Article } from '@/types';
import s from './Articles.module.scss';
import Navigation from '@/components/Navigation';

const { defaultImageUrl } = gc.system;

const Article = ({ article }: { article: Article }) => {
  useEffect(() => {
    const lsData = gu.getLS('++_astraia_article');
    if (!lsData) return;
  }, []);

  console.log('article', article);

  if (!article) return null;

  const imageUrl = article.image ? article.image : defaultImageUrl;

  return (
    <Navigation isActive={true}>
      <main>
        <Container label={'alticle'}>
          <section className={s.dashboard}>
            <div className={s.hero}>
              <Image
                src={imageUrl}
                className={s.heroImage}
                fill
                alt={article.title}
              />

              <h1 className={s.title}>{article.title}</h1>
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
