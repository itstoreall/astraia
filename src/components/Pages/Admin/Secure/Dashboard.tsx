/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';
import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import { useGlobalState } from '@/Global/context/use';
import Information from './Information';
import ArticleList from './ArticleList';
import Editor from './Editor';
import Loader from '@/components/Loader';

const Dashboard = () => {
  const { app, data } = useGlobalState();

  useLayoutEffect(() => () => data.set(null), []);

  // console.log('* dashboard status:', app.status);

  return (
    <ApolloProvider>
      {app.isInit && data.articles && <Information />}
      {app.isInit && <ArticleList />}
      {(app.isCreate || app.isEdit) && <Editor />}
      {app.isPending && <Loader />}
    </ApolloProvider>
  );
};

export default Dashboard;
