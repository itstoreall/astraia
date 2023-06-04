import s from './Footer.module.scss';
import Container from '../Container/Container';
import Navigation from '../Navigation';

const Footer = () => {
  return (
    <footer>
      <Container element={'footer'}>
        <div className={s.content}>
          <Navigation element={'footer'} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
