import Logo from '../Logo';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span className={s.copyright}>
          astraia <span className={s.copySymbol}>&copy;</span>
          <time>{` ${new Date().getFullYear()}`}</time>
        </span>
        {/* <span className={s.copySymbol}>&copy;</span> */}
      </div>
    </footer>
  );
};

export default Footer;
