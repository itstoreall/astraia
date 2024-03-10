import { useGlobalState } from '@/Global/context/use';
import s from './Dashboard.module.scss';

const Information = () => {
  const { data } = useGlobalState();

  return (
    <section className={s.informationSection}>
      <div className={s.content}>
        <span className={s.infoBox}>
          <span className={s.title}>Статьи</span>
          <span className={s.value}>{data.articles?.length || 0}</span>
        </span>
      </div>
    </section>
  );
};

export default Information;
