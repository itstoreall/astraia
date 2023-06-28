import router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { IArticle } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import useFetchArticles from '@/hooks/useFetchArticles';
import s from './Dashboard.module.scss';
import Button from '../../Button';
import useViewport from '@/hooks/useViewport';
import useProportion from '@/hooks/useProportion';
import { useEffect } from 'react';
// import useIsAdmin from '@/hooks/useIsAdmin';

const Dashboard = () => {
  const { setArticles, theme } = useGlobalContext();
  const { isLoading, data } = useFetchArticles();
  const { viewport } = useViewport();
  const { width, height } = useProportion(
    2,
    1,
    viewport === 'mobile' ? 160 : viewport === 'tablet' ? 160 : 160
    // viewport === 'mobile' ? 390 : viewport === 'tablet' ? 300 : 400
  );

  useEffect(() => {
    setArticles(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
          {data?.length ? (
            <ul className={s.list}>
              {data?.map((article: IArticle) => {
                return (
                  <li key={article.id} className={s.item}>
                    <Link
                      className={s.cardLink}
                      href={`/admin/dashboard/${article.id}`}
                    >
                      <div className={`${s.card} ${s[theme]}`}>
                        <div className={s.thumb}>
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={width}
                            height={height}
                          />
                        </div>
                        <div className={s.metaWrap}>
                          <p className={s.metaTitle}>{article.title}</p>
                          <div className={s.infoWrap}>
                            <div className={`${s.info} ${s.views}`}>
                              <span className={s.infoTitle}>{'Просмотры'}</span>
                              <span className={s.infoText}>{'3567865'}</span>
                            </div>
                            <div className={`${s.info} ${s.author}`}>
                              <span className={s.infoTitle}>{'Автор'}</span>
                              <span className={s.infoText}>
                                {article.author}
                                {/* {'21234123412341234123412412341'} */}
                              </span>
                            </div>
                          </div>
                        </div>
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
