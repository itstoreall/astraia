import Link from 'next/link';
import s from './Navigation.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Navigation = ({ parent }: { parent: string }) => {
  const { access, theme } = useGlobalContext();

  // console.log('Nav theme:', theme);
  // console.log('Nav access:', access);
  // console.log('Nav parent:', parent);

  return (
    <nav className={`${s.navigation}`}>
      <ul className={s.list}>
        {parent === 'header' && (
          <>
            {access?.isAdmin && (
              <li className={s.item}>
                <Link className={s.button} href='/admin/dashboard'>
                  Редактор
                </Link>
              </li>
            )}
          </>
        )}
        <li className={s.item}>
          <Link
            className={`${s.button} ${s[parent]} ${s[theme]}`}
            href='/articles'
          >
            Статьи
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={`${s.button} ${s[parent]} ${s[theme]}`}
            href='/about'
          >
            О нас
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={`${s.button} ${s[parent]} ${s[theme]}`}
            href='/contacts'
          >
            Контакты
          </Link>
        </li>
        {parent === 'footer' && (
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
