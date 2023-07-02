import '@/styles/global.scss';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { IAccess } from '@/interfaces';
import client from '@/utils/apolloClient';
import Layout from '../components/Layout';
import AdminPage from './admin';
import LoginPage from './admin/login';
import DashboardPage from './admin/dashboard';
import ArticlesPage from './articles';
import ArticlePage from './articles/[id]';
import EditPage from './admin/dashboard/[id]';
import AboutPage from './about';
import ContactsPage from './contacts';
import AddPage from './admin/dashboard/add';
import NotFoundPage from './404';
import { GlobalContext } from '@/context/GlobalContext';
// import Spinner from '@/components/Spinner/Spinner';
import meta from '@/configs/meta';

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

  // const serverSwitch = 'https://magic-api-vercel.vercel.app/';
  // const serverSwitch = currentUrl;

  // const client = new ApolloClient({
  //   uri: serverSwitch,
  //   cache: new InMemoryCache(),
  // });

  const { pathname } = router;

  const getPageComponent = () => {
    // !isLoading && setIsLoading(true);

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

  const headHandler = () => {
    // const _id = router.query.id;
    // const path = pathname.split('/');

    console.log('');
    console.log('router', router);
    console.log('pathname', pathname);
    console.log('arr', pathname.split('/'));

    let page: 'home' | 'about' | 'contacts' | 'articles' | 'id' =
      pathname === '/'
        ? 'home'
        : pathname === '/about'
        ? 'about'
        : pathname === '/contacts'
        ? 'contacts'
        : pathname === '/articles'
        ? 'articles'
        : pathname === '/articles/[id]'
        ? 'id'
        : 'home';

    return (
      <Head>
        <title>{meta(pageProps.article)[page].tilte}</title>
        <meta
          name='description'
          content={meta(pageProps.article)[page].description}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        <meta
          property='og:title'
          content={meta(pageProps.article)[page].tilte}
        />
        <meta
          property='og:description'
          content={meta(pageProps.article)[page].description}
        />
        <meta property='og:url' content={meta(pageProps.article)[page].url} />
        <meta
          property='og:image'
          content={meta(pageProps.article)[page].image}
        />

        <meta property='title' content={meta(pageProps.article)[page].tilte} />
        <meta
          property='description'
          content={meta(pageProps.article)[page].description}
        />

        <meta
          name='twitter:title'
          content={meta(pageProps.article)[page].tilte}
        />
        <meta
          name='twitter:description'
          content={meta(pageProps.article)[page].description}
        />
        <meta
          name='twitter:image'
          content={meta(pageProps.article)[page].image}
        />
      </Head>
    );
  };

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
        {headHandler()}

        {/* <Head>
          <title>Astraia</title>
          <meta
            name='description'
            content='Cайт о духовном саморазвитии. Здесь вы найдете вдохновение, практические советы и ресурсы, которые помогут вам на пути к гармонии, радости и духовному саморазвитию'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />

          <meta property='og:url' content='https://astraia.storeall.com.ua/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Astraia' key='title' />
          <meta
            property='og:description'
            content='Astraia - духовное саморазвитие'
          />
          <meta
            property='og:image'
            content='https://astraia.storeall.com.ua/space.jpg'
          />

          <meta name='twitter:card' content='Astraia' />
          <meta property='twitter:domain' content='astraia.storeall.com.ua' />
          <meta
            property='twitter:url'
            content='https://astraia.storeall.com.ua/'
          />
          <meta name='twitter:title' content='Astraia' />
          <meta
            name='twitter:description'
            content='Astraia - духовное саморазвитие'
          />
          <meta
            name='twitter:image'
            content='https://astraia.storeall.com.ua/space.jpg'
          />
        </Head> */}
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
