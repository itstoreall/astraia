import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import List from './List';

const Articles = () => {
  return (
    <ApolloProvider>
      <List />
    </ApolloProvider>
  );
};

export default Articles;
