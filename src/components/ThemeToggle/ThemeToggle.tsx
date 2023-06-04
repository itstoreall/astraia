import s from './ThemeToggle.module.scss';
import { useGlobalContext } from '../../context/GlobalContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useGlobalContext();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <label className={`${s.switchButton} ${s[theme]}`}>
      <input type='checkbox' onChange={toggleTheme} />
      <span></span>
    </label>
  );
};

export default ThemeToggle;
