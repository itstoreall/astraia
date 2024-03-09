import { useState } from 'react';
import ApolloProvider from '@/GraphQL/provider/ApolloProvider';
import * as config from '../config';
import Editor from './Editor';

const { init, create, pending } = config.dashboard.status;

const Dashboard = () => {
  const [status, setStatus] = useState(init);

  const handleStatus = (s: string) => setStatus(s);

  return (
    <ApolloProvider>
      <Editor status={status} handleStatus={handleStatus} />
    </ApolloProvider>
  );
};

export default Dashboard;
