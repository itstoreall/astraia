import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import List from './List';
import Container from '@/components/Container';
import s from './Articles.module.scss';
import Navigation from '@/components/Navigation';

const Articles = () => {
  return (
    <ApolloProvider>
      <Navigation isActive={true}>
        <Container label={'articles'}>
          <aside className={s.sidebar}>Sidebat</aside>

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
