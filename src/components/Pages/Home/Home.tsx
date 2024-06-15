'use client';
/*
import { useEffect, useState } from 'react';
import { useGlobalState } from '@/Global/context/use';
import * as gc from '@/config/global';
import Container from '@/components/Container';
*/
import s from './Home.module.scss';

/*
const { articles, admin } = gc.page;
const { title: astraia } = gc.meta;
*/

const Home = () => {
  /*
  const [title, setTitle] = useState<string>('');
  const [links, setLinks] = useState<string>('');

  const { app } = useGlobalState();

  useEffect(() => {
    setTimeout(() => setTitle('title'), 500);
    setTimeout(() => setLinks('links'), 1100);
  }, []);
  */

  return (
    <main className={s.main}>
      {/* <Container label={gc.page.home.label}>
        <section className={s.heroBlock}>
          <div className={s.content}>
            <h1 className={s[title]}>{astraia}</h1>

            <nav className={s.navigation}>
              <ul className={`${s.navList} ${s[links]}`}>
                <li className={`${s.navItem}`}>
                  <span className={s.linkWrap}>
                    {'> '}
                    <a href={`/${articles.pathname}`}>статьи</a>
                  </span>
                </li>
                <li className={`${s.navItem}`}>
                  <span className={s.linkWrap}>
                    {'> '}
                    <a href={`/${admin.pathname}`}>вход</a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </Container> */}
    </main>
  );
};

export default Home;
