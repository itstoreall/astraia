import router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { IArticle } from '@/interfaces';
import useFetchArticles from '@/hooks/useFetchArticles';
import s from './Dashboard.module.scss';
import Button from '../Button';
import useViewport from '@/hooks/useViewport';
import useProportion from '@/hooks/useProportion';
// import { useGlobalContext } from '@/context/GlobalContext';
// import useIsAdmin from '@/hooks/useIsAdmin';

const Dashboard = () => {
  // const { access, setAccess, theme } = useGlobalContext();
  const { isLoading, articles } = useFetchArticles();
  const { viewport } = useViewport();
  const { width, height } = useProportion(
    2,
    1,
    viewport === 'mobile' ? 390 : viewport === 'tablet' ? 300 : 400
  );

  console.log('isLoading', isLoading);
  console.log('articles', articles);

  return (
    <div className={s.dashboardWrap}>
      <div className={s.heading}>
        <Button
          fn={() => router.push('/admin/dashboard/add')}
          // style={{ backgroundColor: 'teal' }}
          // hover={{ backgroundColor: 'tomato' }}
        >
          Новая статья
        </Button>
      </div>

      {!isLoading ? (
        <>
          {articles?.length ? (
            <ul className={s.list}>
              {articles?.map((article: IArticle) => {
                return (
                  <li key={article.id} className={s.item}>
                    <Link
                      className={s.cardLink}
                      href={`/articles/${article.id}`}
                    >
                      <div className={s.card}>
                        <div className={s.thumb}>
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={width}
                            height={height}
                          />
                        </div>
                        <p>{article.id}</p>
                        <p>{article.title}</p>
                        <p>{article.author}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>На сервере нет ни одной статьи</p>
          )}
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Dashboard;

// <>
//   {articles.map((art: IArticle) => {
//     return (
//       <div key={art.id}>
//         <div className={s.thumb}>
//           <Image
//             src={art.image}
//             alt={art.title}
//             width={width}
//             height={height}
//           />
//         </div>

// <p>{art.title}</p>
// <p>{art.description}</p>
// <p>{art.author}</p>
//         {/* {articleElements.map((paragraph, index) =>
//           paragraph.name === 'title' ? (
//             <h2 key={index}>{paragraph.text}</h2>
//           ) : (
//             <p key={index}>{paragraph.text}</p>
//           )
//         )} */}
//       </div>
//     );
//   })}
// </>
