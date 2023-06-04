import { IChld } from '@/interfaces';
import Container from '../Container';

const Main = ({ children }: IChld) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
