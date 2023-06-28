import { useState } from 'react';
import router from 'next/router';
import { useMutation } from '@apollo/client';
import { useGlobalContext } from '@/context/GlobalContext';
import { ASTRAIA_ACCESS } from '@/constants';
import UPDATE_ADMIN from '@/gql/updateAdmin';
import s from './Login.module.scss';
import Button from '@/components/Button';

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
    <div className={s.loginWrap}>
      <div className={`${s.login} ${s[theme]}`}>
        <span className={s.title}>Вход</span>

        <form className={s.loginForm} onSubmit={handleSubmit}>
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
            Отправить
          </Button>

          {updateError && (
            <p>{updateError.message} Check your login and password</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
