import Link from 'next/link';
import s from './Navigation.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

const Navigation = ({
  parent,
  mobile,
  setIsOpenMenu,
}: {
  parent: string;
  mobile?: string;
  setIsOpenMenu?: (b: boolean) => void;
}) => {
  const { access, theme } = useGlobalContext();

  // console.log('Nav theme:', theme);
  // console.log('Nav access:', access);
  // console.log('Nav parent:', parent);

  return (
    <nav className={`${s.navigation} ${s[parent]} ${mobile ? s[mobile] : {}}`}>
      <ul className={s.list}>
        {parent === 'header' && (
          <>
            {access?.isAdmin && (
              <li className={`${s.item} ${s[parent]}`}>
                <Link
                  className={`${s.button} ${s[parent]} ${s[theme]} ${s.admin}`}
                  href='/admin/dashboard'
                  onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
                >
                  Редактор
                </Link>
              </li>
            )}
          </>
        )}
        <li className={`${s.item} ${s[parent]}`}>
          <Link
            className={`${s.button} ${s[parent]} ${s[theme]}`}
            href='/articles'
            onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
          >
            Статьи
          </Link>
        </li>
        <li className={`${s.item} ${s[parent]}`}>
          <Link
            className={`${s.button} ${s[parent]} ${s[theme]}`}
            href='/about'
            onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
          >
            О нас
          </Link>
        </li>
        <li className={`${s.item} ${s[parent]}`}>
          <Link
            className={`${s.button} ${s[parent]} ${s[theme]}`}
            href='/contacts'
            onClick={() => setIsOpenMenu && setIsOpenMenu(false)}
          >
            Контакты
          </Link>
        </li>
        {parent === 'footer' && (
          <li className={`${s.item} ${s[parent]}`}>
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
