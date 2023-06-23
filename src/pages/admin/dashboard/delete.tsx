import Crumbs from '@/components/Crumbs';
import s from '../../page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Delete = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['admin', 'delete']}>
        <h2 className={s.title}>Удаление</h2>
      </Crumbs>
      <article className={s.article}>.article</article>
    </section>
  );
};

export default Delete;
