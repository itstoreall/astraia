import { useGlobalState } from '@/Global/context/use';
import NewArticleIcon from '@/assets/icons/NewArticleIcon';
import s from './NewArticleButton.module.scss';

const NewArticleButton = () => {
  const { app } = useGlobalState();

  if (!app.isInit) return null;

  return (
    <div
      className={s.newArticleButtonBlock}
      onClick={() => app.set(app.config.CREATE)}
      title={'Новая статья'}
    >
      <NewArticleIcon />
    </div>
  );
};

export default NewArticleButton;
