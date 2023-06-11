import s from './Footer.module.scss';
import Container from '../Container/Container';
import Navigation from '../Navigation';
import Copyright from './Copyright';
import { useGlobalContext } from '@/context/GlobalContext';

const Footer = () => {
  const { theme } = useGlobalContext();

  return (
    <footer>
      <Container element={'footer'}>
        <div className={`${s.content} ${s[theme]}`}>
          <Navigation element={'footer'} />
          <Copyright />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
