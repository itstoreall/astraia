// import { useGlobalContext } from '@/context/GlobalContext';
import { IContainerProps } from '@/interfaces';
import s from './Container.module.scss';

const Container = ({ element, children }: IContainerProps) => {
  // const { access } = useGlobalContext();

  // console.log('access --- !!!! --->', access);

  return <div className={`${s.container} ${s[element]}`}>{children}</div>;
};

export default Container;
