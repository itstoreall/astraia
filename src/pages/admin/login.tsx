import Head from 'next/head';
import s from './admin.module.scss';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Авторизация' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p className={s.title}>Login</p>
      <Link href={'/'}>to Home</Link>
    </>
  );
};

export default Login;
