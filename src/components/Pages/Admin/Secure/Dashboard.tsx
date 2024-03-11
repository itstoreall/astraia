import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import { useGlobalState } from '@/Global/context/use';
import Information from './Information';
import ArticleList from './ArticleList';
import Editor from './Editor';

const Dashboard = () => {
  const { app, data } = useGlobalState();

  console.log('* dashboard status:', app.status);

  return (
    <ApolloProvider>
      {app.isInit && data.articles && <Information />}
      {app.isInit && <ArticleList />}
      {app.isEdit && <Editor />}
      {app.isCreate && <Editor />}
    </ApolloProvider>
  );
};

export default Dashboard;
