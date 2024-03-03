import Footer from '../Footer';
import Header from '../Header';
import { NavigationProps } from './types';

const Navigation = ({ children, isActive }: NavigationProps) => {
  return isActive ? (
    <>
      <Header />
      {children} <Footer />
    </>
  ) : (
    <>{children}</>
  );
};

export default Navigation;
