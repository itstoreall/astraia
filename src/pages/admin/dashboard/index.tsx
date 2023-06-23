// import { useCallback, useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';
import { IArticle } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs';
// import { ASTRAIA_ACCESS } from '@/constants';
import useFetchArticles from '@/hooks/useFetchArticles';
import useProportion from '@/hooks/useProportion';
import Button from '@/components/Button';
import useViewport from '@/hooks/useViewport';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import GET_ARTICLES from '@/gql/getArticles';
// import Spinner from '@/components/Spinner';

const Dashboard = () => {
  const { theme } = useGlobalContext();
  const { isLoading, articles } = useFetchArticles();
  const { viewport } = useViewport();
  const { width, height } = useProportion(
    2,
    1,
    viewport === 'mobile' ? 390 : viewport === 'tablet' ? 300 : 400
  );

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard']}>
        <h2 className={s.title}>Дашборд</h2>
      </Crumbs>

      <article className={s.article}>
        <Button
          fn={() => router.push('/admin/dashboard/add')}
          // style={{ backgroundColor: 'teal' }}
          // hover={{ backgroundColor: 'tomato' }}
        >
          Добавить
        </Button>

        <>
          {articles.map((art: IArticle) => {
            return (
              <div key={art.id}>
                <div className={s.thumb}>
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={width}
                    height={height}
                  />
                </div>

                <p>{art.title}</p>
                <p>{art.description}</p>
                <p>{art.author}</p>
                {/* {articleElements.map((paragraph, index) =>
                  paragraph.name === 'title' ? (
                    <h2 key={index}>{paragraph.text}</h2>
                  ) : (
                    <p key={index}>{paragraph.text}</p>
                  )
                )} */}
              </div>
            );
          })}
        </>

        {/* {isLoading ? <Spinner /> : <p>Arts</p>} */}
      </article>
    </section>
  );
};

export default Dashboard;
