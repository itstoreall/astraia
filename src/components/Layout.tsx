import { useEffect, useState } from 'react';
import { IChld } from '@/interfaces';
import s from './Layout.module.scss';
import useVerification from '@/hooks/useVerification';
import Header from './Header';
import Main from './Main/';
import Footer from './Footer';
// import { useGlobalContext } from '@/context/GlobalContext';
// import { useEffect } from 'react';

// !access?.loading ? children : 'Loading (layout)...';

const Layout = ({ children }: IChld) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);
  // const verified = useVerification();
  // const { access, setAccess } = useGlobalContext();

  // useEffect(() => {
  //   if (!access && !verified?.loading) setAccess(verified);
  // }, [verified, access, setAccess]);

  // console.log(1, 'Layout', verified);

  return (
    <>
      {!loading && (
        <div className={s.wrapper}>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
