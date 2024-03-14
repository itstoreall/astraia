import ReturnIcon from '@/assets/icons/ReturnIcon';
import HourGlassIcon from '@/assets/icons/HourGlassIcon';
import { useGlobalState } from '@/Global/context/use';
import SaveIcon from '@/assets/icons/SaveIcon';
import s from '../Modal.module.scss';

export type DeleteArticleProps = {
  action: (id: string) => void;
};

const DeleteArticle = ({ action }: DeleteArticleProps) => {
  const { modal, details } = useGlobalState();

  console.log('DeleteArticle');

  const closeModal = () => modal.set(false);

  return (
    <div className={`${s.contentBlock} ${s.updateArticle}`}>
      <button className={s.return} onClick={closeModal}>
        <ReturnIcon />
      </button>
      <button className={s.hour}>
        <HourGlassIcon />
      </button>
      <button className={s.save} onClick={() => action(details.article?.id!)}>
        <SaveIcon />
      </button>
    </div>
  );
};

export default DeleteArticle;
