import Link from 'next/link';
import s from './Header.module.scss';
import Container from '../Container/Container';
import Navigation from '../Navigation';
import ThemeToggle from '../ThemeToggle';
import { useGlobalContext } from '@/context/GlobalContext';

const Header = () => {
  const { theme } = useGlobalContext();

  return (
    <header className={`${s.header} ${theme === 'light' ? s.light : s.dark}`}>
      <Container element={'header'}>
        <div className={s.content}>
          <Link href={'/'}>
            <h1 className={s.logo}>Astraia</h1>
          </Link>

          <div className={s.menu}>
            <Navigation element={'header'} />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
