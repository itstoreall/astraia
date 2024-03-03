import Logo from '../Logo';
import MenuButton from '../Menu/MenuButton';
import s from './Header.module.scss';

const Header = () => {
  const create = () => {};

  return (
    <header className={s.header}>
      <div className={s.content}>
        <Logo label={'header'} />
        <MenuButton />
      </div>
    </header>
  );
};

export default Header;
