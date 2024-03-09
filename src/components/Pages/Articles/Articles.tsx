import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import * as gc from '@/config/global';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Sidebar from './Sidebar';
import List from './List';
import s from './Articles.module.scss';

const Articles = () => {
  return (
    <ApolloProvider>
      <Navigation isActive={true}>
        <Container label={gc.page.articles.label}>
          <Sidebar />
          <main className={s.main}>
            <section className={s.articlesSection}>
              <List />
            </section>
          </main>
        </Container>
      </Navigation>
    </ApolloProvider>
  );
};

export default Articles;
