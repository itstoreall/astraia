import '@/styles/global.scss';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { IAccess } from '@/interfaces';
import Layout from '../components/Layout';
import AdminPage from './admin';
import LoginPage from './admin/login';
import DashboardPage from './admin/dashboard';
import ArticlesPage from './articles';
import ArticlePage from './articles/[id]';
import EditPage from './admin/dashboard/[id]';
// import EditPage from './admin/dashboard/edit';
import DeletePage from './admin/dashboard/delete';
import AboutPage from './about';
import ContactsPage from './contacts';
import AddPage from './admin/dashboard/add';
import NotFoundPage from './404';
import { GlobalContext } from '@/context/GlobalContext';
// import Spinner from '@/components/Spinner/Spinner';

const App = ({ Component, pageProps }: AppProps) => {
  const [access, setAccess] = useState<IAccess | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme !== savedTheme && setTheme(savedTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // --------

  // console.log('isLoading', isLoading);

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
    // !isLoading && setIsLoading(true);

    const { pathname } = router;

    switch (pathname) {
      case '/':
        return <Component {...pageProps} />;

      case '/admin':
        return <AdminPage />;

      case '/admin/login':
        return <LoginPage />;

      case '/admin/dashboard':
        return <DashboardPage />;

      case '/admin/dashboard/add':
        return <AddPage />;

      case '/admin/dashboard/[id]':
        return <EditPage />;

      // case '/admin/dashboard/edit':
      //   return <EditPage />;

      case '/admin/dashboard/delete':
        return <DeletePage />;

      case '/articles':
        return <ArticlesPage articles={pageProps.articles} />;

      case '/articles/[id]':
        return <ArticlePage article={pageProps.article} />;

      case '/about':
        return <AboutPage />;

      case '/contacts':
        return <ContactsPage />;

      default:
        return <NotFoundPage />;
    }
  };

  // isLoading && setIsLoading(false);

  return (
    <GlobalContext.Provider
      value={{
        articles,
        setArticles,
        access,
        setAccess,
        theme,
        setTheme,
        isLoading,
        setIsLoading,
      }}
    >
      <ApolloProvider client={client}>
        <Layout>
          {getPageComponent()}
          {/* {isLoading && <Spinner />} */}
        </Layout>
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
