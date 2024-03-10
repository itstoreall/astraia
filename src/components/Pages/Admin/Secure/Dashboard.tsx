import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import { useGlobalState } from '@/Global/context/use';
import Information from './Information';
import Articles from './Articles';
import Editor from './Editor';

const Dashboard = () => {
  const { app } = useGlobalState();

  return (
    <ApolloProvider>
      {app.isInit && <Information />}
      {app.isInit && <Articles />}
      {app.isCreate && <Editor />}
    </ApolloProvider>
  );
};

export default Dashboard;
