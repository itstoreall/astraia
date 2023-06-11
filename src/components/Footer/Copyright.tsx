import Link from 'next/link';
import s from './Footer.module.scss';

const Copyright = () => {
  return (
    <div className={s.copyrightBlock}>
      <div className={s.copyright}>
        <Link href='/' className={s.logoLink}>
          Astraia
        </Link>
        <span className={s.copyrightIcon}>&copy;</span>
        <time>{new Date().getFullYear()}</time>
      </div>
    </div>
  );
};

export default Copyright;
