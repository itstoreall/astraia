'use client';
// import { useState } from 'react';
import * as gc from '@/config/global';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Guard from './Guard';
import Dashboard from './Secure/Dashboard';
import s from './Admin.module.scss';
import { useGlobalState } from '@/Global/context/use';

const { admin: adm, dashboard } = gc.page;

const Admin = () => {
  const { admin } = useGlobalState();

  return (
    <Navigation isActive={admin.is}>
      <main className={s.main}>
        <Container label={!admin.is ? adm.label : dashboard.label}>
          <Guard>
            <Dashboard />
          </Guard>
        </Container>
      </main>
    </Navigation>
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
