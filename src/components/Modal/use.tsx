/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useGlobalState } from '@/Global/context/use';
import CreateArticle from '@/components/Modal/contents/CreateArticle.content';
import UpdateArticle from '@/components/Modal/contents/UpdateArticle.content';
import DeleteArticle from '@/components/Modal/contents/DeleteArticle.content';
import MDSimulator from '@/components/Modal/contents/MDSimulator.content';
import Modal from '@/components/Modal';

export type ModalProps = {
  isModal: boolean;
  setIsModal: (b: boolean) => void;
};

const useModal = () => {
  const [isLocked, setIsLocked] = useState(false);

  const { modal } = useGlobalState();

  useEffect(() => {
    setIsLocked(true);
    return () => {
      setIsLocked(false);
      modal.set(false);
    };
  }, []);

  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLocked]);

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
