import Link from 'next/link';
import * as gc from '@/config/global';
import s from './Logo.module.scss';

const { pathname } = gc.page.home;
const { labelEsoterrium } = gc.system;

const Logo = ({ label }: { label: string }) => {
  return (
    <Link href={pathname}>
      <h1 className={`${s.logo} ${s[label]}`}>{labelEsoterrium}</h1>
    </Link>
  );
};

export default Logo;
