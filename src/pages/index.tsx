// import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import s from './page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Home = () => {
  const { theme } = useGlobalContext();

  return (
    <>
      <section className={`${s.page} ${s[theme]}`}>
        <h2 className={s.titleHome}>Духовное саморазвитие</h2>
        <Image
          width='900'
          height='450'
          src='https://res.cloudinary.com/astraia/image/upload/v1688401749/astraia_uploads/space_uyhfig.jpg'
          alt='Description of my image'
        />
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
