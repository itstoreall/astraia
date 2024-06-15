import Link from 'next/link';
import * as gc from '@/config/global';
import s from './Footer.module.scss';
import { useGlobalState } from '@/Global/context/use';

const { home, admin } = gc.page;
const { labelEsoterrium } = gc.system;

const Footer = () => {
  const { app } = useGlobalState();
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <span className={s.copyright}>
          <Link className={s.logo} href={home}>
            <span>{labelEsoterrium}</span>
          </Link>

          <span className={s.copySymbol}>&copy;</span>

          <Link
            className={s.year}
            href={`/${admin.pathname}`}
            onClick={() => app.set(app.config.GUARD)}
          >
            <time>{` ${new Date().getFullYear()}`}</time>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
