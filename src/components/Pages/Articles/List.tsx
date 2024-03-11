/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Link from 'next/link';
import Image from 'next/image';
import useFetchArticles from '@/hooks/useFetchArticles';
import * as gc from '@/config/global';
import s from './Articles.module.scss';
import { useGlobalState } from '@/Global/context/use';

const { pathname: articlesPathname } = gc.page.articles;

const List = () => {
  const { data } = useGlobalState();

  if (!data.articles) return null;

  return (
    <ul className={s.articleList}>
      {data.articles.map((article, idx) => {
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
