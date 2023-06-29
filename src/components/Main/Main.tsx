import { IChld } from '@/interfaces';
import s from './Main.module.scss';
import Container from '../Container';

const Main = ({ children }: IChld) => {
  return (
    <main className={`${s.main}`}>
      <Container parent={'main'}>{children}</Container>
    </main>
  );
};

export default Main;
