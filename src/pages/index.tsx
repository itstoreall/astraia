import Head from 'next/head';
import s from './page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import imageUrl from '@/assets/images/space.jpg';

const Home = () => {
  const { theme } = useGlobalContext();
  // const thumbnailImageUrl = '@/assets/images/space.jpg';

  return (
    <>
      <Head>
        <title>Astraia</title>
        <meta name='description' content='Astraia - духовное саморазвитие' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:url' content='https://astraia.storeall.com.ua/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Astraia' key='title' />
        <meta
          property='og:description'
          content='Astraia - духовное саморазвитие'
        />
        <meta
          property='og:image'
          content='https://astraia.storeall.com.ua/space.jpg'
        />

        <meta name='twitter:card' content='Astraia' />
        <meta property='twitter:domain' content='astraia.storeall.com.ua' />
        <meta
          property='twitter:url'
          content='https://astraia.storeall.com.ua/'
        />
        <meta name='twitter:title' content='Astraia' />
        <meta
          name='twitter:description'
          content='Astraia - духовное саморазвитие'
        />
        <meta
          name='twitter:image'
          content='https://astraia.storeall.com.ua/space.jpg'
        />
      </Head>

      <section className={`${s.page} ${s[theme]}`}>
        <h2 className={s.titleHome}>Духовное саморазвитие</h2>
        <article className={s.article}>.article prod</article>
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
