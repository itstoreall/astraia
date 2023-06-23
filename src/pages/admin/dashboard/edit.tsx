import Crumbs from '@/components/Crumbs';
import s from '../../page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Edit = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard', 'edit']}>
        <h2 className={s.title}>Редактирование</h2>
      </Crumbs>
      <article className={s.article}>.article</article>
    </section>
  );
};

export default Edit;
