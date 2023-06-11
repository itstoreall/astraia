import s from '../page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs/Crumbs';

const Articles = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['articles']}>
        <h2 className={s.title}>Статьи</h2>
      </Crumbs>
    </section>
  );
};

export default Articles;
