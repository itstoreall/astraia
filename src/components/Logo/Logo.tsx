import s from './Logo.module.scss';

const Logo = ({ label }: { label: string }) => {
  return <h1 className={`${s.logo} ${s[label]}`}>astraia</h1>;
};

export default Logo;
