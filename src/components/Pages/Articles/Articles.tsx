import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import List from './List';
import Navigation from '@/components/Navigation';
import Container from '@/components/Container';
import Sidebar from './Sidebar';
import s from './Articles.module.scss';

const Articles = () => {
  return (
    <ApolloProvider>
      <Navigation isActive={true}>
        <Container label={'articles'}>
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
