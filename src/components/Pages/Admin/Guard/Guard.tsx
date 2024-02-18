import { MouseEvent, useEffect, useState } from 'react';
import { KeyHandlerProps } from '../types';
import { ChildrenProps } from '@/types';
import s from '../Admin.module.scss';

const adminKey = process.env.NEXT_PUBLIC_ADMIN_KEY;

const KeyHandler = ({ setIsAdmin }: KeyHandlerProps) => {
  const [titleStyle, setTitleStyle] = useState<string>('');
  const [linksStyle, setLinksStyle] = useState<string>('');
  const [keyStyle, setKeyStyle] = useState<string>('');
  const [t3s, setT3sStyle] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    setTimeout(() => setTitleStyle('title'), 500);
    setTimeout(() => setLinksStyle('links'), 800);
    setTimeout(() => setKeyStyle('key'), 800);
    setTimeout(() => setT3sStyle('3s'), 1000);
  }, []);

  const submit = (e: MouseEvent<HTMLFormElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    userId === adminKey && setIsAdmin(true);
  };

  return (
    <section className={s.adminSection}>
      <div className={s.content}>
        <h1 className={s[titleStyle]}>Yo</h1>

        <nav className={s.navigation}>
          <ul className={`${s.navList} ${s[linksStyle]}`}>
            <li className={`${s.navItem}`}>
              <span className={s.linkWrap}>
                <a href={'/'}>home</a>
                {' <'}
              </span>
            </li>
          </ul>
        </nav>

        <form
          className={`${s.keyForm} ${s[keyStyle]}`}
          onClick={e => submit(e)}
        >
          <input
            className={s.input}
            placeholder={'Key'}
            onChange={e => setUserId(e.target.value)}
          />
          <button type={'submit'} className={`${s.submitButton} ${s[t3s]}`}>
            {'>'}
          </button>
        </form>
      </div>
    </section>
  );
};

const Guard = ({ children }: ChildrenProps) => {
  const [isAdmin, setIsAdmin] = useState(false);

  console.log('isAdmin', isAdmin);

  // effect(() => {
  //   console.log('isAdmin', isAdmin.value);
  // });

  return <>{isAdmin ? children : <KeyHandler setIsAdmin={setIsAdmin} />}</>;
};

export default Guard;
