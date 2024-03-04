import s from './Articles.module.scss';

const categories = [
  'Тонкий мир',
  'Нумерология',
  'Практики',
  'Эзотерические фильмы',
  'Болталка'
];

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarContent}>
        <ul className={s.sidebarList}>
          {categories.map((el, idx) => (
            <li key={idx} className={s.sidebarItem}>
              <span className={s.itemText}>{el}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
