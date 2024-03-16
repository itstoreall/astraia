/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGlobalState } from '@/Global/context/use';
import CreateArticle from '@/components/Modal/contents/CreateArticle';
import UpdateArticle from '@/components/Modal/contents/UpdateArticle';
import DeleteArticle from '@/components/Modal/contents/DeleteArticle';
import MDSimulator from '@/components/Modal/contents/MDSimulator';
import Modal from '@/components/Modal';

export type ModalProps = {
  isModal: boolean;
  setIsModal: (b: boolean) => void;
};

const useModal = () => {
  const { modal } = useGlobalState();

  useEffect(() => {
    return () => modal.set(false);
  }, []);

  return {
    Modal,
    CreateArticle,
    UpdateArticle,
    DeleteArticle,
    MDSimulator,
    is: modal.is,
    set: (b: boolean) => modal.set(b),
    content: modal.content,
    setContent: (s: string) => modal.setContent(s)
  };
};

export default useModal;
