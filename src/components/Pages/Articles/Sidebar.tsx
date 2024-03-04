import s from './Articles.module.scss';

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarContent}>
        <span>Нумерология</span>
        <span>Тонкий мир</span>
        <span>Магия</span>
        <span>Єзотерика</span>
      </div>
    </aside>
  );
};

export default Sidebar;
