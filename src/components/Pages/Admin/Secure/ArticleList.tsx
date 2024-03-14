// import Link from 'next/link';
import Image from 'next/image';
import useFetchArticles from '@/hooks/useFetchArticles';
import { useGlobalState } from '@/Global/context/use';
import { Article } from '@/Global/types';
// import * as gc from '@/config/global';
import Loader from '@/components/Loader';
import s from './Dashboard.module.scss';

const ArticleList = () => {
  const { app, details } = useGlobalState();
  const { articles } = useFetchArticles();

  if (!articles) return <Loader />;

  const editArticle = (article: Article) => {
    details.set(article);
    app.set(app.config.EDIT);
  };

  return (
    <section className={s.articlesSection}>
      <ul className={s.articleList}>
        {articles.map((article, idx) => (
          <li className={s.articleItem} key={article.id}>
            <div className={s.itemContent} onClick={() => editArticle(article)}>
              <span className={s.idx}>{idx + 1}</span>

              <div className={s.thumb}>
                <Image
                  src={article.image}
                  className={s.itemImage}
                  sizes='40px'
                  priority={true}
                  fill
                  alt={article.title}
                />
              </div>

              <div className={s.meta}>
                <p>{article.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
