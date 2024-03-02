/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useQuery from '@/GraphQL/hooks/useQuery';
import { Article } from '@/types';

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
    <div>
      <ul>
        {articles.map((article, idx) => {
          return (
            <li key={idx}>
              <Link href={`articles/${article.id}`}>{article.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
