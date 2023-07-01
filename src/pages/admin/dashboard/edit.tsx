import { useGlobalContext } from '@/context/GlobalContext';
import PageLoading from '@/components/PageLoading';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs';

const Edit = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['dashboard', 'edit']}>
        <h2 className={s.title}>Редактирование</h2>
      </Crumbs>

      {/* <PageLoading> */}
      <article className={s.article}>.article</article>
      {/* </PageLoading> */}
    </section>
  );
};

export default Edit;
