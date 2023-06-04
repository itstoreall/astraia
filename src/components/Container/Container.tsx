// import { useGlobalContext } from '@/context/GlobalContext';
import { IChld } from '@/interfaces';

const Container = ({ children }: IChld) => {
  // const { access } = useGlobalContext();

  // console.log('access --- !!!! --->', access);

  return <div>{children}</div>;
};

export default Container;
