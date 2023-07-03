import '@/styles/global.scss';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { IAccess, IArticle } from '@/interfaces';
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
import { CldImage } from 'next-cloudinary';

const App = ({ Component, pageProps }: AppProps) => {
  const [access, setAccess] = useState<IAccess | null>(null);
  const [theme, setTheme] = useState<string>('light');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [imageDataURL, setImageDataURL] = useState<string>('');

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

  const router = useRouter();

  const { pathname } = router;

  const getPageComponent = () => {
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

  const headHandler = () => {
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
          content={
            imageDataURL ? imageDataURL : meta(pageProps.article)[page].image
          }
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

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
          content={
            imageDataURL ? imageDataURL : meta(pageProps.article)[page].image
          }
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

-----------

result {
  asset_id: '7891812f3d973c4ec7cc050889e5b680',
  public_id: 'astraia_uploads/hrjsrveufjogkztgehny',
  version: 1688377385,
  version_id: 'ecc7c68f518ba409d3b0531839a1009b',
  signature: 'e5b53247b864672ce26c81d2e376a8b7c0c0ec69',
  width: 900,
  height: 450,
  format: 'png',
  resource_type: 'image',
  created_at: '2023-07-03T09:43:05Z',
  tags: [],
  bytes: 237469,
  type: 'upload',
  etag: 'e607fafbb886a27c9e6c0ae5bd49110f',
  placeholder: false,
  url: 'http://res.cloudinary.com/astraia/image/upload/v1688377385/astraia_uploads/hrjsrveufjogkztgehny.png',
  secure_url: 'https://res.cloudinary.com/astraia/image/upload/v1688377385/astraia_uploads/hrjsrveufjogkztgehny.png',
  folder: 'astraia_uploads',
  access_mode: 'public',
  api_key: '657354151857738'
}

*/
