import { useGlobalContext } from '@/context/GlobalContext';
import useIsAdmin from '@/hooks/useIsAdmin';
import PageLoading from '@/components/PageLoading';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs';
import ArticleHandler from '@/components/ArticleHandler';

const AddPage = () => {
  useIsAdmin('/admin');

  const { theme, access } = useGlobalContext();

  return (
    <>
      {access ? (
        <section className={`${s.page} ${s[theme]}`}>
          <Crumbs routes={['dashboard', 'add']}>
            <h2 className={s.title}>{'Новая статья'}</h2>
          </Crumbs>

          {/* <PageLoading> */}
          <article className={s.article}>
            <ArticleHandler label={'add'} />
          </article>
          {/* </PageLoading> */}
        </section>
      ) : (
        'Verification (admin)...'
      )}
    </>
  );
};

export default AddPage;
