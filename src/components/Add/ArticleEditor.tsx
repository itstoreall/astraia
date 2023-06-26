import { useEffect, useState } from 'react';
import { ChangeInputValue, ChangeTextareaValue, MoveElement } from '@/types';
// import { IArticleElement } from '@/interfaces';
import { ARTICLE_ELEMENTS } from '@/constants';
import { useGlobalContext } from '@/context/GlobalContext';
import { useAddArticleContext } from '@/context/AddArticleContext';
import useProportion from '@/hooks/useProportion';
import useViewport from '@/hooks/useViewport';
import s from './Add.module.scss';
import Button from '../Button';
import DotsHorizontal from '@/assets/icons/DotsHorizontal';
import DotsVertical from '@/assets/icons/DotsVertical';

const art = ARTICLE_ELEMENTS;

const ArticleEditor = () => {
  const [element, setElement] = useState<string>('');
  const [action, setAction] = useState<string | null>(null);
  const [isOpenEditMenu, setIsOpenEditMenu] = useState<boolean>(false);
  // const [textareaValue, setTextareaValue] = useState('');
  // const [editIndex, setEditIndex] = useState<number | null>(null);
  // const [isDisplayArticle, setIsDisplayArticle] = useState<boolean>(false);

  const { theme } = useGlobalContext();
  // const { width } = useProportion(900, 1, 900);
  const { viewport } = useViewport();
  const {
    textareaValue,
    setTextareaValue,
    editIndex,
    setEditIndex,
    // isDisplayArticle,
    // setIsDisplayArticle,
    articleElements,
    setArticleElements,
    submitError,
    setSubmitError,
  } = useAddArticleContext();

  useEffect(() => {
    const lsElements = JSON.parse(localStorage.getItem(art) || 'null');
    if (lsElements) setArticleElements(lsElements.articleElements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (articleElements?.length) {
      localStorage.setItem(art, JSON.stringify({ articleElements }));
    } else localStorage.removeItem(art);
  }, [articleElements]);

  const cleanStates = () => {
    setAction(null);
    setEditIndex(null);
    setElement('');
    setTextareaValue('');
    submitError && setSubmitError('');
  };

  const changeInputValue: ChangeInputValue = event => {
    setTextareaValue(event.target.value);
    submitError && setSubmitError('');
  };

  const changeTextareaValue: ChangeTextareaValue = event => {
    setTextareaValue(event.target.value);
    submitError && setSubmitError('');
  };

  const addElement = (name: string) => {
    setIsOpenEditMenu(false);
    setAction('add');

    if (textareaValue.trim() !== '') {
      if (editIndex !== null) {
        setArticleElements(prevElements => {
          const updatedParagraphs = [...prevElements];
          updatedParagraphs[editIndex].text = textareaValue.trim();
          return updatedParagraphs;
        });
      } else {
        setArticleElements(prevElements => [
          ...prevElements,
          { name, text: textareaValue.trim() },
        ]);
      }

      return cleanStates();
    }

    editIndex !== null && deleteElement(editIndex);
  };

  const editElement = (idx: number, element: string) => {
    setIsOpenEditMenu(false);
    setAction('edit');
    setElement(element);
    setEditIndex(idx);
    setTextareaValue(articleElements[idx].text);
  };

  // const editElement = (idx: number, element: string) => {
  //   setElement(element);
  //   setEditIndex(idx);
  //   setTextareaValue(articleElements[idx].text);
  // };

  const deleteElement = (index: number) => {
    setIsOpenEditMenu(false);

    setArticleElements(prevElements => {
      const updatedParagraphs = [...prevElements];
      updatedParagraphs.splice(index, 1);
      return updatedParagraphs;
    });

    cleanStates();
  };

  const moveElementInArray: MoveElement = (array, fromIndex, toIndex) => {
    const element = array[fromIndex];
    array.splice(fromIndex, 1);
    array.splice(toIndex, 0, element);
  };

  const moveUp = (index: number) => {
    setIsOpenEditMenu(false);

    if (index > 0) {
      setArticleElements(prevElements => {
        const updatedParagraphs = [...prevElements];
        moveElementInArray(updatedParagraphs, index, index - 1);
        return updatedParagraphs;
      });
    }
  };

  const moveDown = (index: number) => {
    setIsOpenEditMenu(false);

    if (index < articleElements.length - 1) {
      setArticleElements(prevElements => {
        const updatedParagraphs = [...prevElements];
        moveElementInArray(updatedParagraphs, index, index + 1);
        return updatedParagraphs;
      });
    }
  };

  // const convertToArticle = () =>
  //   articleElements.map((paragraph, index) =>
  //     paragraph.name === 'title' ? (
  //       <h2 key={index}>{paragraph.text}</h2>
  //     ) : (
  //       <p key={index}>{paragraph.text}</p>
  //     )
  //   );

  // const setTextareaSize = () => {
  //   const textareaWidth = width - 120;
  //   return { width: textareaWidth, height: 250 };
  // };

  console.log('');
  console.log('action', action);
  console.log('editIndex', editIndex);
  console.log('element', element);
  console.log('isOpenEditMenu', isOpenEditMenu);
  // console.log('viewport', viewport);

  return (
    <div className={`${s.fieldsWrap} ${s[theme]}`}>
      {/* {!isDisplayArticle ? ( */}
      <div className={`${s.fields}`}>
        <p className={`${s.infoText}`}>{'Редактор статьи'}</p>

        <ul className={`${s.fildList}`}>
          {articleElements.map((el, index) => (
            <li key={index} className={s.fildItem}>
              {el.name === 'title' ? (
                <>
                  {/* <h2 className={s.elementTitle}>{el.text}</h2> */}
                  {/* {action !== 'edit' ? (
                    <h2 className={s.elementTitle}>{el.text}</h2>
                  ) : ( */}
                  {action === 'edit' &&
                  editIndex === index &&
                  element === 'title' ? (
                    <>
                      <input
                        className={`${s.field} ${s.input}`}
                        type='text'
                        value={textareaValue}
                        onChange={changeInputValue}
                        name='title'
                        placeholder={'Заголовок'}
                      />
                      <div className={`${s.buttonWrap}`}>
                        <Button fn={() => addElement('title')}>
                          {editIndex !== null ? 'Сохронить' : 'Добавить'}
                        </Button>
                        <Button fn={() => cleanStates()}>{'Отменить'}</Button>
                      </div>
                    </>
                  ) : (
                    <h2 className={s.elementTitle}>{el.text}</h2>
                  )}
                </>
              ) : (
                <>
                  {action === 'edit' &&
                  editIndex === index &&
                  element === 'paragraph' ? (
                    <>
                      <textarea
                        className={`${s.field} ${s.textarea}`}
                        value={textareaValue}
                        onChange={changeTextareaValue}
                        placeholder={'Параграф...'}
                        // rows={getTextAreaRows(textareaValue)}
                      />
                      <div className={`${s.buttonWrap}`}>
                        <Button fn={() => addElement('paragraph')}>
                          {editIndex !== null ? 'Сохронить' : 'Добавить'}
                        </Button>
                        <Button fn={() => cleanStates()}>{'Отменить'}</Button>
                      </div>
                    </>
                  ) : (
                    <p className={s.elementText}>{el.text}</p>
                  )}
                </>
              )}

              {isOpenEditMenu && index === editIndex && (
                <div className={`${s.buttonWrap} ${s.editMenu}`}>
                  <Button fn={() => editElement(index, el.name)}>
                    Редактировать
                  </Button>

                  <Button fn={() => deleteElement(index)}>Удалить</Button>
                  {index !== 0 && (
                    <Button fn={() => moveUp(index)}>Выше</Button>
                  )}
                  {index !== articleElements.length - 1 && (
                    <Button fn={() => moveDown(index)}>Ниже</Button>
                  )}
                </div>
              )}

              <div
                className={`${s.editMenuButton}`}
                onClick={() => {
                  setEditIndex(index);
                  setIsOpenEditMenu(!isOpenEditMenu);
                }}
                // onMouseEnter={() => setIsOpenEditMenu(true)}
                // onMouseLeave={() => setIsOpenEditMenu(false)}
              >
                {viewport === 'mobile' ? (
                  <DotsVertical fill={'white'} />
                ) : (
                  <DotsHorizontal fill={'white'} />
                )}
              </div>
            </li>
          ))}
        </ul>

        {element && action === 'add' && (
          <>
            {element === 'title' ? (
              <input
                className={`${s.field} ${s.input}`}
                type='text'
                value={textareaValue}
                onChange={changeInputValue}
                name='title'
                placeholder={'Заголовок'}
              />
            ) : (
              <textarea
                className={`${s.field} ${s.textarea}`}
                value={textareaValue}
                onChange={changeTextareaValue}
                placeholder={'Параграф...'}
                // rows={getTextAreaRows(textareaValue)}
              />
            )}

            <div className={`${s.buttonWrap}`}>
              <Button
                fn={() =>
                  addElement(element === 'title' ? 'title' : 'paragraph')
                }
              >
                {editIndex !== null ? 'Сохронить' : 'Добавить'}
              </Button>
              <Button fn={() => cleanStates()}>{'Отменить'}</Button>
            </div>
          </>
        )}

        {!element && (
          <div className={`${s.buttonWrap}`}>
            <Button
              fn={() => {
                setElement('title');
                setAction('add');
              }}
            >
              Добавить заголовок
            </Button>
            <Button
              fn={() => {
                setElement('text');
                setAction('add');
              }}
            >
              Добавить параграф
            </Button>
          </div>
        )}

        {/* <div>
          {articleElements.map((element, index) => (
            <div key={index}>
              {element.name === 'title' ? (
                <h2>{element.text}</h2>
              ) : (
                <p>{element.text}</p>
              )}
              <Button fn={() => editElement(index, element.name)}>
                Редактировать
              </Button>
              <Button fn={() => deleteElement(index)}>Удалить</Button>
              {index !== 0 && <Button fn={() => moveUp(index)}>Выше</Button>}
              {index !== articleElements.length - 1 && (
                <Button fn={() => moveDown(index)}>Ниже</Button>
              )}
            </div>
          ))}
        </div> */}
      </div>
      {/* ) : (
        <div>
          <h2>Предпросмотр статьи</h2>
          {convertToArticle()}
        </div>
      )} */}

      {/* <Button fn={() => setIsDisplayArticle(!isDisplayArticle)}>
        {isDisplayArticle ? 'Редактор' : 'Предпросмотр'}
      </Button> */}
    </div>
  );
};

export default ArticleEditor;
