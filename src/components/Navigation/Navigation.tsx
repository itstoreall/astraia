import s from './Navigation.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';

const Navigation = ({ element }: { element: string }) => {
  const { access, theme } = useGlobalContext();

  console.log('Nav theme:', theme);
  console.log('Nav access:', access);
  console.log('Nav element:', element);

  return (
    <nav className={`${s.navigation}`}>
      <ul className={s.list}>
        {element === 'header' && (
          <>
            {access?.isAdmin && (
              <li className={s.item}>
                <Link className={s.button} href='/admin/dashboard/articles'>
                  Редактор
                </Link>
              </li>
            )}
          </>
        )}
        <li className={s.item}>
          {element === 'header' ? (
            <Link
              className={`${s.button} ${s.header} ${s[theme]}`}
              href='/articles'
            >
              Статьи
            </Link>
          ) : (
            <Link
              className={`${s.button} ${s.footer} ${s[theme]}`}
              href='/articles'
            >
              Статьи
            </Link>
          )}
        </li>
        <li className={s.item}>
          {element === 'header' ? (
            <Link
              className={`${s.button} ${s.header} ${s[theme]}`}
              href='/about'
            >
              О нас
            </Link>
          ) : (
            <Link
              className={`${s.button} ${s.footer} ${s[theme]}`}
              href='/about'
            >
              О нас
            </Link>
          )}
        </li>
        <li className={s.item}>
          {element === 'header' ? (
            <Link
              className={`${s.button} ${s.header} ${s[theme]}`}
              href='/contacts'
            >
              Контакты
            </Link>
          ) : (
            <Link
              className={`${s.button} ${s.footer} ${s[theme]}`}
              href='/contacts'
            >
              Контакты
            </Link>
          )}
        </li>
        {element === 'footer' && (
          <li className={s.item}>
            <Link
              className={`${s.button} ${s.footer} ${s[theme]}`}
              href='/admin'
            >
              Админ
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
