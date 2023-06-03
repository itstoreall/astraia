import { useRouter } from 'next/router';

const Admin = () => {
  const { pathname } = useRouter();

  return (
    <section>
      <h1>{pathname === '/admin/login' ? 'Авторизация' : 'Редактор'}</h1>
      <div>
        <p>adm</p>
      </div>
    </section>
  );
};

export default Admin;
