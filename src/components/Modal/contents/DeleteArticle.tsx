import ReturnIcon from '@/assets/icons/ReturnIcon';
import HourGlassIcon from '@/assets/icons/HourGlassIcon';
import { useGlobalState } from '@/Global/context/use';
import RemoveIcon from '@/assets/icons/RemoveIcon';
import s from '../Modal.module.scss';

export type DeleteArticleProps = {
  action: (id: string) => void;
};

const DeleteArticle = ({ action }: DeleteArticleProps) => {
  const { modal, details } = useGlobalState();

  const closeModal = () => modal.set(false);

  return (
    <div className={`${s.contentBlock} ${s.updateArticle}`}>
      <button className={s.return} onClick={closeModal}>
        <ReturnIcon />
      </button>
      <button className={s.hour}>
        <HourGlassIcon />
      </button>
      <button className={s.delete} onClick={() => action(details.article?.id!)}>
        <RemoveIcon />
      </button>
    </div>
  );
};

export default DeleteArticle;
