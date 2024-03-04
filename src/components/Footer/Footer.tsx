import Link from 'next/link';
import Logo from '../Logo';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span className={s.copyright}>
          <Link className={s.logo} href={'/'}>
            <span>{`astraia`}</span>
          </Link>
          <span className={s.copySymbol}>&copy;</span>
          <time>{` ${new Date().getFullYear()}`}</time>
        </span>
        {/* <span className={s.copySymbol}>&copy;</span> */}
      </div>
    </footer>
  );
};

export default Footer;
