import useModal from '@/hooks/useModal';
import { useGlobalState } from '@/Global/context/use';
import * as config from '../Pages/Admin/config';
import PublishIcon from '@/assets/icons/PublishIcon';
import s from './Publisher.module.scss';

const { label: PublisherLabel } = config.publisher;

const Publisher = () => {
  const { details } = useGlobalState();
  const modal = useModal();

  const publishArticle = async () => {
    const id = details.article?.id;
    if (!id) return;
    modal.set(true);
    modal.setContent(PublisherLabel);
    console.log('header publishArticle', true);
  };

  return (
    <div
      className={s.publisherButtonBlock}
      onClick={publishArticle}
      title={'Опубликовать'}
    >
      <PublishIcon />
    </div>
  );
};

export default Publisher;

/*
const NewArticleButton = () => {
  const { app } = useGlobalState();

  if (!app.isInit) return null;

  return (
    <div
      className={s.newArticleButtonBlock}
      onClick={() => app.set(app.config.CREATE)}
    >
      <NewArticleIcon />
    </div>
  );
};
*/
