import Link from 'next/link';
import router from 'next/router';
import s from './Navigation.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import useViewport from '@/hooks/useViewport';
import { ASTRAIA_ACCESS } from '@/constants';

const adm = ASTRAIA_ACCESS;

const Navigation = ({
  parent,
  mobile,
  setIsOpenMenu,
}: {
  parent: string;
  mobile?: string;
  setIsOpenMenu?: (b: boolean) => void;
}) => {
  const { access, theme, setAccess } = useGlobalContext();
  const { landscape } = useViewport();

  const redirect = (path: string) => {
    setAccess(null);
    router.push(path);
  };

  const logOut = () => {
    localStorage.removeItem(adm);
    setIsOpenMenu && setIsOpenMenu(false);
    redirect('/admin/login');
  };

  return (
    <nav className={`${s.navigation} ${s[parent]} ${mobile ? s[mobile] : {}}`}>
      <ul className={`${s.list} ${s[landscape]}`}>
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
        {parent === 'header' ? (
          <>
            {access?.isAdmin && (
              <li className={`${s.item} ${s[parent]}`}>
                <a
                  className={`${s.button} ${s.header} ${s[theme]}`}
                  onClick={() => logOut()}
                >
                  Выход
                </a>
              </li>
            )}
          </>
        ) : (
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
