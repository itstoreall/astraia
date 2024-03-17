import { useEffect, useState } from 'react';
import { ChildrenProps } from '@/types';
import s from './Modal.module.scss';

const Modal = ({ children }: ChildrenProps) => {

  // const [isContent, setIsContent] = useState<boolean>(false);

  /*
  useEffect(() => {
    setTimeout(() => {
      setIsContent(true);
    }, 500);
  }, []);
  */

  return (
    <div className={s.modal}>
      <span className={s.backdrop} />
      <div className={`${s.content}`}>
        {/* <div className={`${s.content} ${s[isContent ? 'active' : '']}`}> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
