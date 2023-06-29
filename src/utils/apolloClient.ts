import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// const currentUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://magic-api-vercel.vercel.app/'
//     : 'http://localhost:8822/';

const serverSwitch = 'https://magic-api-vercel.vercel.app/';
// const serverSwitch = currentUrl;

const httpLink = createHttpLink({
  uri: serverSwitch,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.error('Global Apollo Error in apolloClient.ts:', message);
    });
  }

  if (networkError) {
    console.error('Network Error in apolloClient.ts:', networkError);
  }
});

const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
