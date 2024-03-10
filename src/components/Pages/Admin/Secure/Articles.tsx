import Link from 'next/link';
import Image from 'next/image';
import useFetchArticles from '@/hooks/useFetchArticles';
import * as gc from '@/config/global';
import Loader from '@/components/Loader';
import s from './Dashboard.module.scss';

const { pathname: adminPathname } = gc.page.admin;

const Articles = () => {
  const { articles } = useFetchArticles();

  console.log('articles ===>', articles);

  if (!articles) return <Loader />;

  return (
    <section className={s.articlesSection}>
      <ul className={s.articleList}>
        {articles.map((article, idx) => (
          <li className={s.articleItem} key={article.id}>
            <Link href={`/${adminPathname}/${article.id}`}>
              <div className={s.itemContent}>
                <span className={s.idx}>{idx}</span>

                <Image
                  src={article.image}
                  width={40}
                  height={40}
                  alt={article.title}
                />

                <div className={s.meta}>
                  <p>{article.title}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
