import { useAddArticleContext } from '@/context/AddArticleContext';
import { useGlobalContext } from '@/context/GlobalContext';
import s from './Add.module.scss';
// import useViewport from '@/hooks/useViewport';

const HeaderFields = () => {
  const {
    isArticle,
    setIsArticle,
    title,
    setTitle,
    description,
    setDescription,
  } = useAddArticleContext();
  const { theme } = useGlobalContext();
  // const { viewport}=useViewport()

  // const { width, height } = useProportion(900, 450, 300);

  const handleInput = (event: any) => {
    isArticle && setIsArticle(false);
    const { name, value } = event.target;

    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);

    console.log(`input ${name} value:`, value);
  };

  return (
    <div className={`${s.headerFieldsWrap} ${s[theme]}`}>
      {isArticle ? (
        <p className={`${s.infoText}`}>{'Статья успешно создана!'}</p>
      ) : (
        <p className={`${s.infoText}`}>
          {'Заполните все поля и добавьте изображение'}
        </p>
      )}
      {!isArticle && (
        <div className={`${s.headerFields}`}>
          <input
            className={`${s.field} ${s.title}`}
            type='text'
            value={title}
            onChange={e => handleInput(e)}
            name='title'
            placeholder='Название статьи'
          />
          <textarea
            className={`${s.field} ${s.description}`}
            maxLength={525}
            value={description}
            onChange={e => handleInput(e)}
            name='description'
            placeholder='Краткое описание'
          />
        </div>
      )}
    </div>
  );
};

export default HeaderFields;
