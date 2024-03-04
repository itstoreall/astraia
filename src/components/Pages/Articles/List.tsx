/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useQuery from '@/GraphQL/hooks/useQuery';
import { Article } from '@/types';
import s from './Articles.module.scss';

const List = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  const data = useQuery();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const res = await data.all();
    res?.success && setArticles(res.data);
  };

  if (!articles) return null;

  return (
    <ul className={s.articleList}>
      {articles.map((article, idx) => {
        return (
          <li key={idx} className={s.articleItem}>
            <Link href={`/articles/${article.id}`}>
              <div className={s.thumb}>
                <Image
                  src={article.image}
                  className={s.cardImage}
                  fill
                  alt='Astraia picture'
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
