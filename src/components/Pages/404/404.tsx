'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import s from './404.module.scss';

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 2000);
  }, [router]);

  return (
    <div className={s.page404}>
      <span>404</span>
    </div>
  );
};

export default Page404;
