import Head from 'next/head';
import s from './page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Home = () => {
  const { theme } = useGlobalContext();

  return (
    <>
      <Head>
        <title>Astraia</title>
        <meta
          name='description'
          content='Astraia - статьи о духовном саморазвитии'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:url' content='https://astraia.storeall.com.ua/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Astraia' key='title' />
        <meta
          property='og:description'
          content='Astraia - статьи о духовном саморазвитии'
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
          content='Astraia - статьи о духовном саморазвитии'
        />
        <meta
          name='twitter:image'
          content='https://astraia.storeall.com.ua/space.jpg'
        />
      </Head>

      <section className={`${s.page} ${s[theme]}`}>
        <h2 className={s.titleHome}>Духовное саморазвитие</h2>
        <article className={s.article}>
          <p>
            Добро пожаловать на сайт Astraia, сайт о духовном саморазвитии!
            Здесь вы найдете вдохновение, практические советы и ресурсы, которые
            помогут вам на пути к гармонии, радости и саморазвитию.
          </p>
          <p>
            Сайт Astraia создан с целью помочь людям искать глубинное понимание
            себя, своего места в мире и найти путь к росту и развитию своей
            души. Мы верим, что каждый из нас обладает внутренним потенциалом и
            способностью к преображению, и наша миссия - помочь вам раскрыть
            этот потенциал.
          </p>
          <p>
            На сайте Astraia вы найдете множество материалов, включая статьи,
            блоги, видео и аудиозаписи, которые охватывают различные аспекты
            духовного развития. Мы обсуждаем темы, связанные с медитацией,
            йогой, самоанализом, осознанностью, энергетикой и многими другими
            методами и практиками, которые помогут вам стать лучшей версией
            себя.
          </p>
        </article>
      </section>
    </>
  );
};

export default Home;
