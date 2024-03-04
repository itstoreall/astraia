import Link from 'next/link';
import s from './Logo.module.scss';

const Logo = ({ label }: { label: string }) => {
  return (
    <Link href={'/'}>
      <h1 className={`${s.logo} ${s[label]}`}>astraia</h1>
    </Link>
  );
};

export default Logo;
