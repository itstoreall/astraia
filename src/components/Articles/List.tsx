import { IArticle } from '@/interfaces';
import Link from 'next/link';
import s from './List.module.scss';

const ArticleList = ({ articles }: { articles: IArticle[] }) => {
  // console.log('articles ===>', articles);

  return (
    <ul className={s.list}>
      {articles?.map((el: IArticle) => {
        // console.log('el ===>', el);

        return (
          <li
            key={el.id}
            className={s.item}
            onClick={() => console.log('Click')}
          >
            <Link className={s.cardLink} href={`/articles/${el.id}`}>
              <div className={s.card}>
                <p>{el.id}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
