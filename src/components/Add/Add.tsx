import { useGlobalContext } from '@/context/GlobalContext';
import s from './Add.module.scss';
import HeaderFields from './HeaderFields/HeaderFields';
import ImageUploader from './ImageUploader/ImageUploader';
import ArticleEditor from './ArticleEditor/ArticleEditor';

const Add = () => {
  const { theme } = useGlobalContext();

  return (
    <div className={`${s.fieldsWrap} ${s[theme]}`}>
      <HeaderFields />
      {/* <ImageUploader /> */}
      <ArticleEditor />
    </div>
  );
};

export default Add;
