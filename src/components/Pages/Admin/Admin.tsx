'use client';
import Container from '@/components/Container';
import Guard from './Guard';
import Dashboard from './Dashboard';
import s from './Admin.module.scss';

const Admin = () => {
  return (
    <main className={s.main}>
      <Container label={'page'}>
        <Guard>
          <Dashboard />
        </Guard>
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
