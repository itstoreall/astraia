'use client';
import Container from '@/components/Container';
import s from './Home.module.scss';
import { useEffect, useState } from 'react';

const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [links, setLinks] = useState<string>('');

  useEffect(() => {
    setTimeout(() => setTitle('title'), 500);
    setTimeout(() => setLinks('links'), 1100);
  }, []);

  return (
    <main className={s.main}>
      <Container label={'home'}>
        <section className={s.heroBlock}>
          <div className={s.content}>
            <h1 className={s[title]}>ASTRAIA</h1>

            <nav className={s.navigation}>
              <ul className={`${s.navList} ${s[links]}`}>
                <li className={`${s.navItem}`}>
                  <span className={s.linkWrap}>
                    {'> '}
                    <a href={'/admin'}>admin</a>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;
