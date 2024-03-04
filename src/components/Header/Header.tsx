import Logo from '../Logo';
import ArticlesButton from '../ArticlesButton';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <Logo label={'header'} />
        <ArticlesButton />
      </div>
    </header>
  );
};

export default Header;
