import Head from 'next/head';
import { useGlobalContext } from '@/context/GlobalContext';
import PageLoading from '@/components/PageLoading';
import s from '../page.module.scss';
import Crumbs from '@/components/Crumbs';
import Login from '@/components/Admin/Login/Login';

const LoginPage = () => {
  const { theme } = useGlobalContext();

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Авторизация' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={`${s.page} ${s[theme]}`}>
        <Crumbs routes={['contacts']}>
          <h2 className={s.title}>Вход</h2>
        </Crumbs>

        <PageLoading>
          <article className={s.article}>
            <Login />
          </article>
        </PageLoading>
      </section>
    </>
  );
};

export default LoginPage;
