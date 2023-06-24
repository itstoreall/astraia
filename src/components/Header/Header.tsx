import { useEffect, useState } from 'react';
import Link from 'next/link';
import s from './Header.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';
import { contrstLight, contrstDark } from '@/theme';
import BurgerIcon from '@/assets/icons/Burger';
import CloseIcon from '@/assets/icons/Close';
import Container from '../Container/Container';
import Navigation from '../Navigation';
import ThemeToggle from '../ThemeToggle';
import useViewport from '@/hooks/useViewport';

const Header = () => {
  const { theme } = useGlobalContext();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const { landscape, viewport } = useViewport(isOpenMenu, setIsOpenMenu);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpenMenu]);

  console.log('landscape', landscape);

  return (
    <header className={`${s.header} ${theme === 'light' ? s.light : s.dark}`}>
      <p>{landscape}</p>
      <p>{viewport}</p>
      <p>{isOpenMenu}</p>
      <Container parent={'header'}>
        <div className={s.content}>
          <Link href={'/'}>
            <h1 className={s.logo}>Astraia</h1>
          </Link>

          <div className={s.menu}>
            <button
              className={s.burger}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {!isOpenMenu ? (
                <BurgerIcon
                  fill={theme === 'dark' ? contrstDark : contrstLight}
                />
              ) : (
                <CloseIcon
                  fill={theme === 'dark' ? contrstDark : contrstLight}
                />
              )}
            </button>

            {isOpenMenu && (
              <div className={`${s.mobStyle} ${s[theme]} ${s[landscape]}`}>
                <div className={s.menuContent}>
                  <ThemeToggle />
                  <Navigation
                    parent={'header'}
                    mobile={'mobile'}
                    setIsOpenMenu={setIsOpenMenu}
                  />
                </div>
              </div>
            )}

            <div className={s.descStyle}>
              <Navigation parent={'header'} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
