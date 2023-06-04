import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AdminPage from './admin';
import Login from './admin/login';
import ArticlesPage from './articles';
import ArticlePage from './articles/[id]';
import EditPage from './articles/[id]/edit';
import DeletePage from './articles/[id]/delete';
import AboutPage from './about';
import ContactsPage from './contacts';
import NotFoundPage from './404';
import AddPage from './admin/add';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GlobalContext } from '@/context/GlobalContext';
import useVerification from '@/hooks/useVerification';
import { IAccess } from '@/interfaces';

const App = ({ Component, pageProps }: AppProps) => {
  const [access, setAccess] = useState<IAccess | null>(null);
  const [articles, setArticles] = useState<any[]>([]);
  const [themeMode, setThemeMode] = useState<string>('light');

  const router = useRouter();

  // const currentUrl =
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://magic-api-vercel.vercel.app/'
  //     : 'http://localhost:8822/';

  const serverSwitch = 'https://magic-api-vercel.vercel.app/';
  // const serverSwitch = currentUrl;

  const client = new ApolloClient({
    uri: serverSwitch,
    cache: new InMemoryCache(),
  });

  const getPageComponent = () => {
    const { pathname } = router;

    switch (pathname) {
      case '/':
        return <Component {...pageProps} />;

      case '/admin':
        return <AdminPage />;

      case '/admin/login':
        return <Login />;

      case '/admin/add':
        return <AddPage />;

      case '/articles':
        return <ArticlesPage />;

      case '/articles/[id]':
        return <ArticlePage />;

      case '/articles/[id]/edit':
        return <EditPage />;

      case '/articles/[id]/delete':
        return <DeletePage />;

      case '//add':
        return <DeletePage />;

      case '/about':
        return <AboutPage />;

      case '/contacts':
        return <ContactsPage />;

      default:
        return <NotFoundPage />;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        articles,
        setArticles,
        access,
        setAccess,
        themeMode,
        setThemeMode,
      }}
    >
      <ApolloProvider client={client}>
        <Layout>{getPageComponent()}</Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default App;

/*
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

*/
