import ReturnIcon from '@/assets/icons/ReturnIcon';
import HourGlassIcon from '@/assets/icons/HourGlassIcon';
import { useGlobalState } from '@/Global/context/use';
import SaveIcon from '@/assets/icons/SaveIcon';
import s from '../Modal.module.scss';

export type CreateArticleProps = {
  action: () => void;
};

const CreateArticle = ({ action }: CreateArticleProps) => {
  const { modal } = useGlobalState();

  const closeModal = () => modal.set(false);

  return (
    <div className={`${s.contentBlock} ${s.updateArticle}`}>
      <button className={s.return} onClick={closeModal}>
        <ReturnIcon />
      </button>
      <button className={s.hour}>
        <HourGlassIcon />
      </button>
      <button className={s.save} onClick={() => action()}>
        <SaveIcon />
      </button>
    </div>
  );
};

export default CreateArticle;
