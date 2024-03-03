import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import List from './List';
import Container from '@/components/Container';
import s from './Articles.module.scss';
import Navigation from '@/components/Navigation';

const Articles = () => {
  return (
    <ApolloProvider>
      <Navigation isActive={true}>
        <main className={s.main}>
          <Container label={'articles'}>
            <section className={s.articlesSection}>
              <List />
            </section>
          </Container>
        </main>
      </Navigation>
    </ApolloProvider>
  );
};

export default Articles;
