import Head from 'next/head';
import s from './page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Home = () => {
  const { theme } = useGlobalContext();

  return (
    <>
      <Head>
        <title>Astraia</title>
        <meta name='description' content='Astraia - духовное саморазвитие' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={`${s.page} ${s[theme]}`}>
        <h2 className={s.titleHome}>Духовное саморазвитие</h2>
        <article className={s.article}>.article</article>
      </section>
    </>
  );
};

export default Home;

/*
export default function Home() {
  return (
    <>
      <Head>
        <title>Astraia</title>
        <meta name='description' content='Astraia - духовное саморазвитие' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>Header</header>
      <main>
        <section>
          <h1>Home</h1>
          <div>
            Loading
          </div>
        </section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
*/
