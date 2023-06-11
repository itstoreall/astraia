import Link from 'next/link';
import s from './Crumbs.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Crumbs = ({ routes, children }: any) => {
  const { theme } = useGlobalContext();

  return (
    <div className={`${s.crumbs} ${s[theme]}`}>
      <ul className={s.crumbsList}>
        <li className={s.crumbsItem}>
          <Link href={'/'}>
            <span className={s.title}>Главная</span>
          </Link>
        </li>

        <>
          {routes.map((route: string) => {
            return (
              <li key={route} className={s.crumbsItem}>
                <span className={s.slash}>/</span>
                <Link href={`/${route}`}>{children}</Link>
              </li>
            );
          })}
        </>
      </ul>
    </div>
  );
};

export default Crumbs;
