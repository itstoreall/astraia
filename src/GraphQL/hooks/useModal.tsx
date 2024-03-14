/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from 'react';
import { useEffect } from 'react';
import { useGlobalState } from '@/Global/context/use';
import CreateArticle from '@/components/Modal/contents/CreateArticle';
import UpdateArticle from '@/components/Modal/contents/UpdateArticle';
import DeleteArticle from '@/components/Modal/contents/DeleteArticle';
import Modal from '@/components/Modal';
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
    CreateArticle,
    UpdateArticle,
    DeleteArticle,
    is: modal.is,
    set: (b: boolean) => modal.set(b),
    content: modal.content,
    setContent: (s: string) => modal.setContent(s)
  };
};

export default useModal;
