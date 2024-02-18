'use client';
import { useEffect, useState } from 'react';
import Guard from './Guard';
import Container from '@/components/Container';
import Dashboard from './Dashboard';
import s from './Admin.module.scss';

const Admin = () => {
  // const [title, setTitle] = useState<string>('');
  // const [links, setLinks] = useState<string>('');
  // const [key, setKey] = useState<string>('');

  // console.log(process.env.NEXT_PUBLIC_ADMIN_KEY);

  // useEffect(() => {
  //   setTimeout(() => setTitle('title'), 500);
  //   setTimeout(() => setLinks('links'), 800);
  //   setTimeout(() => setKey('key'), 800);
  // }, []);

  return (
    <main className={s.main}>
      <Container label={'page'}>
        <Guard>
          <Dashboard />
        </Guard>
        {/* {!isAdmin.value ? (
          // <section className={s.adminSection}>
          //   <div className={s.content}>
          //     <h1 className={s[title]}>Yo</h1>

          //     <nav className={s.navigation}>
          //       <ul className={`${s.navList} ${s[links]}`}>
          //         <li className={`${s.navItem}`}>
          //           <span className={s.linkWrap}>
          //             <a href={'/'}>home</a>
          //             {' <'}
          //           </span>
          //         </li>
          //       </ul>
          //     </nav>

          //     <div className={`${s.inputBlock} ${s[key]}`}>
          //       <input className={s.input} placeholder={'Key'} />
          //       <span className={s.submitButton}>{'>'}</span>
          //     </div>
          //   </div>
          // </section>
        ) : (
          <Dashboard />
        )} */}
      </Container>
    </main>
  );
};

export default Admin;

/*

*word*
**word**
***word***

`word`

* word
* word

1. word
2. word
3. word
   - word
     - word

~~word~~

- [x] word
- [ ] word

<!-- This content will not appear in the rendered Markdown -->

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

# word
## word
### word

> word

[GitHub Pages](https://pages.github.com/)

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

*/
