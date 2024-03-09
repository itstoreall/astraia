/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useQuery from '@/GraphQL/hooks/useQuery';
import * as gc from '@/config/global';
import { Article } from '@/types';
import s from './Articles.module.scss';

const { pathname: articlesPathname } = gc.page.articles;

const List = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  const data = useQuery();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const res = await data.all();
    // console.log('res', res);
    res?.success && setArticles(res.data);
  };

  if (!articles) return null;

  return (
    <ul className={s.articleList}>
      {articles.map((article, idx) => {
        return (
          <li key={idx} className={s.articleItem}>
            <Link href={`/${articlesPathname}/${article.id}`}>
              <div className={s.thumb}>
                <Image
                  src={article.image}
                  className={s.cardImage}
                  fill
                  sizes='400px'
                  priority={true}
                  alt={article.title}
                  // onClick={() => setIsImageInput(true)}
                />
              </div>

              <div className={s.cardMeta}>
                <p>{article.title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
