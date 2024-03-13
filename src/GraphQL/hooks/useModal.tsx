/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from 'react';
import UpdateArticle from '@/components/Modal/contents/UpdateArticle';
import Modal from '@/components/Modal';
import { useGlobalState } from '@/Global/context/use';
import { useEffect } from 'react';
// import { useGlobalState } from '@/Global/context/use';

export type ModalProps = {
  isModal: boolean;
  setIsModal: (b: boolean) => void;
};

const useModal = () => {
  // const { modal } = useGlobalState();
  // const [isModal, setIsModal] = useState<boolean>(false);

  const { modal } = useGlobalState();

  useEffect(() => {
    return () => modal.set(false);
  }, []);

  // console.log(3, 'Modal:', isModal);

  return {
    Modal,
    UpdateArticle,
    is: modal.is,
    set: (b: boolean) => modal.set(b)
  };
};

export default useModal;
