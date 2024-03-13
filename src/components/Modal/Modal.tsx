import { useEffect, useState } from 'react';
// import * as gu from '@/utils/global';
import { ChildrenProps } from '@/types';
import s from './Modal.module.scss';

const Modal = ({ children }: ChildrenProps) => {
  const [isContent, setIsContent] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsContent(true);
    }, 500);
  }, []);

  // useEffect(() => {}, [isContent]);

  console.log('isContent', isContent);

  return (
    <div className={s.modal}>
      <span className={s.backdrop} />
      {/* {isContent && ( */}
      <div className={`${s.content} ${s[isContent ? 'active' : '']}`}>
        {children}
      </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
