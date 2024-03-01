'use client';
import { ReactNode } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const ClientProvider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL,
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ClientProvider;
