// import { useGlobalContext } from '@/context/GlobalContext';
import { IContainerProps } from '@/interfaces';
import s from './Container.module.scss';

const Container = ({ parent, children }: IContainerProps) => {
  // const { access } = useGlobalContext();

  // console.log('access --- !!!! --->', access);

  return <div className={`${s.container} ${s[parent]}`}>{children}</div>;
};

export default Container;
