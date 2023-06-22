import s from './page.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs';

const Contacts = () => {
  const { theme } = useGlobalContext();

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['contacts']}>
        <h2 className={s.title}>Контакты</h2>
      </Crumbs>
    </section>
  );
};

export default Contacts;
