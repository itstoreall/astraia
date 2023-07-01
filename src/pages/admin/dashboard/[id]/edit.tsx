import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IArticle } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import PageLoading from '@/components/PageLoading';
import s from '../../../page.module.scss';
import Crumbs from '@/components/Crumbs';
import ArticleHandler from '@/components/ArticleHandler';

const Edit = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const { theme, articles } = useGlobalContext();

  const router = useRouter();

  useEffect(() => {
    const _article = articles.find(article => router.query.id === article.id);
    _article ? setArticle(_article) : router.push('/admin/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard', 'edit']}>
        <h2 className={s.title}>Редактирование</h2>
      </Crumbs>

      <article className={s.article}>
        <ArticleHandler article={article} label={'edit'} />
      </article>
    </section>
  );
};

export default Edit;
