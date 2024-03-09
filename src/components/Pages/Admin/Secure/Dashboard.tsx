import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import { useGlobalState } from '@/Global/context/use';
import Editor from './Editor';
import Articles from './Articles';

const Dashboard = () => {
  const { app } = useGlobalState();

  console.log('app:', app.isInit);

  return (
    <ApolloProvider>
      {app.isCreate && <Editor />}
      {app.isInit && <Articles />}
    </ApolloProvider>
  );
};

export default Dashboard;
