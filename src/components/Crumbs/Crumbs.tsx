import Link from 'next/link';
import s from './Crumbs.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import cfg from '@/configs/routes';

const Crumbs = ({ routes, children }: any) => {
  const { theme } = useGlobalContext();

  const isAdminPage = () => children.props.children === 'admin';

  return (
    <div className={`${s.crumbs} ${s[theme]}`}>
      <ul className={s.crumbsList}>
        <li className={s.crumbsItem}>
          <Link href={cfg.home.path}>
            <span className={s.crumb}>Главная</span>
          </Link>
        </li>

        <>
          {routes.map((route: string, idx: number) => {
            const withoutLink = () => routes?.length !== idx + 1;

            const secondCrumb =
              routes[0] === 'articles'
                ? 'Статьи'
                : routes[0] === 'about'
                ? 'О нас'
                : routes[0] === 'contacts'
                ? 'Контакты'
                : routes[0] === 'admin'
                ? 'Редактор'
                : 'null';

            return (
              <li key={route} className={s.crumbsItem}>
                <span className={s.slash}>/</span>

                {isAdminPage() ? (
                  <span className={s.crumb}>{'Админ'}</span>
                ) : (
                  <>
                    {withoutLink() ? (
                      <>
                        <Link href={`/${route}`}>
                          {idx === 0 ? (
                            <span
                              className={s.crumb}
                            >{`${secondCrumb}  `}</span>
                          ) : (
                            <>{children}</>
                          )}
                        </Link>
                      </>
                    ) : (
                      <>{children}</>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </>
      </ul>
    </div>
  );
};

export default Crumbs;

/*
return (
    <div className={`${s.crumbs} ${s[theme]}`}>
      <ul className={s.crumbsList}>
        <li className={s.crumbsItem}>
          <Link href={'/'}>
            <span className={s.title}>Главная</span>
          </Link>
        </li>

        <>
          {routes.map((route: string, idx: number) => {
            const withoutLink = () => routes?.length === idx - 1;

            return (
              <li key={route} className={s.crumbsItem}>
                <span className={s.slash}>/</span>
                {withoutLink() ? (
                  <Link href={`/${route}`}>{children}</Link>
                ) : (
                  children
                )}
              </li>
            );
          })}
        </>
      </ul>
    </div>
  );
  */
