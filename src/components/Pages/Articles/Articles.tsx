import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import List from './List';
import Container from '@/components/Container';
import s from './Articles.module.scss';

const Articles = () => {
  return (
    <ApolloProvider>
      <main className={s.main}>
        <Container label={'articles'}>
          <section className={s.articlesSection}>
            <List />
          </section>
        </Container>
      </main>
    </ApolloProvider>
  );
};

export default Articles;
