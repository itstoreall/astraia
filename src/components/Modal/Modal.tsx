import { ChildrenProps } from '@/types';
import s from './Modal.module.scss';

const Modal = ({ children }: ChildrenProps) => {
  return (
    <div className={s.modal}>
      <span className={s.backdrop} />
      <div className={`${s.content}`}>{children}</div>
    </div>
  );
};

export default Modal;
