import { ContainerProps } from './types';
import s from './Container.module.scss';

const Container = ({ children, label }: ContainerProps) => (
  <div className={`${s.container} ${s[label]}`}>
    <div className={s.bg}>
      <div className={s.content}>{children}</div>
    </div>
  </div>
);

export default Container;
