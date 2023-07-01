import s from './page.module.scss';
import PageLoading from '@/components/PageLoading';

const NotFoundPage = () => {
  return (
    <PageLoading>
      <article className={s.article}>NotFoundPage</article>
    </PageLoading>
  );
};

export default NotFoundPage;
