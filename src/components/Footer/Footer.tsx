import Link from 'next/link';
import * as gc from '@/config/global';
import s from './Footer.module.scss';

const { pathname } = gc.page.home;
const { label: astraia } = gc.system;

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span className={s.copyright}>
          <Link className={s.logo} href={pathname}>
            <span>{astraia}</span>
          </Link>
          <span className={s.copySymbol}>&copy;</span>
          <time>{` ${new Date().getFullYear()}`}</time>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
