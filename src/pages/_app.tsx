import '@/styles/globals.css';
import type { AppProps } from 'next/app';

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

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

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

  return <Layout>{getPageComponent()}</Layout>;
};

export default App;

/*
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

*/
