import s from './page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs';

const AboutPage = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['about']}>
        <h2 className={s.title}>О нас</h2>
      </Crumbs>
      <article className={s.article}>.article</article>
    </section>
  );
};

export default AboutPage;
