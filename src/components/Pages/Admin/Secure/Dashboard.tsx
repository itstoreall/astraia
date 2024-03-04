import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import Editor from './Editor';

const Dashboard = () => {
  return (
    <ApolloProvider>
      <Editor />
    </ApolloProvider>
  );
};

export default Dashboard;
