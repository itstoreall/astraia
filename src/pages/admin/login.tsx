import { useState } from 'react';
import Head from 'next/head';
import { useMutation } from '@apollo/client';
import router from 'next/router';
import UPDATE_ADMIN from '@/gql/updateAdmin';
import { ASTRAIA_ACCESS } from '@/constants';
// import Link from 'next/link';
import s from '../page.module.scss';
import Button from '@/components/Button';
import { useGlobalContext } from '@/context/GlobalContext';
import Crumbs from '@/components/Crumbs';

const adm = ASTRAIA_ACCESS;

const Login = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { theme } = useGlobalContext();

  const [updateAdmin, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_ADMIN);

  const clearStates = () => {
    setLogin('');
    setPassword('');
  };

  const handleInput = (event: any) => {
    const { name, value } = event.target;

    name === 'login' && setLogin(value);
    name === 'password' && setPassword(value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const AccessInput = { login, password };

    try {
      const { data } = await updateAdmin({ variables: { input: AccessInput } });
      const { token } = data.updateAdmin;

      if (data) {
        localStorage.setItem(adm, JSON.stringify({ token }));

        clearStates();
        router.push('/admin');
      }
    } catch (e) {
      console.error(e);
    }
  };

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
          <h2 className={s.title}>Login</h2>
        </Crumbs>
      </section>
      <h2 className={s.title}>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={login}
          onChange={e => handleInput(e)}
          name='login'
          placeholder='Login'
        />
        <input
          type='text'
          value={password}
          onChange={e => handleInput(e)}
          name='password'
          placeholder='Password'
        />
        <Button type={'submit'} disabled={updateLoading}>
          Submit
        </Button>
        {updateError && (
          <p>{updateError.message} Check your login and password</p>
        )}
      </form>
    </>
  );
};

export default Login;
