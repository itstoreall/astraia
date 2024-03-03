// 'use client';
import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import Editor from './Editor';
// import s from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <ApolloProvider>
      <Editor />
    </ApolloProvider>
  );
};

export default Dashboard;
