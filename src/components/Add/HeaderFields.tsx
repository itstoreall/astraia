import { useAddArticleContext } from '@/context/AddArticleContext';
import s from './Add.module.scss';
import { useGlobalContext } from '@/context/GlobalContext';

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
        <p>{'Статья успешно создана!'}</p>
      ) : (
        <p>{'Заполните все поля и добавьте изображение'}</p>
      )}
      {!isArticle && (
        <div className={`${s.headerFields}`}>
          <input
            className={`${s.field} ${s.title}`}
            type='text'
            value={title}
            onChange={e => handleInput(e)}
            name='title'
            placeholder='Title'
          />
          <textarea
            className={`${s.field} ${s.description}`}
            value={description}
            onChange={e => handleInput(e)}
            name='description'
            placeholder='Description'
          />
        </div>
      )}
    </div>
  );
};

export default HeaderFields;
