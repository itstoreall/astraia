import { useEffect, useLayoutEffect, useState } from 'react';
import { IArticleHandler } from '@/interfaces';
import { ChangeInputValue, ChangeTextareaValue, MoveElement } from '@/types';
// import { IArticleElement } from '@/interfaces';
import { ARTICLE_ELEMENTS } from '@/constants';
import { colorWhite, middleGrey } from '@/theme';
import { useGlobalContext } from '@/context/GlobalContext';
import { useAddArticleContext } from '@/context/AddArticleContext';
// import useProportion from '@/hooks/useProportion';
import useViewport from '@/hooks/useViewport';
import s from './ArticleEditor.module.scss';
import Button from '../../Button';
import DotsHorizontal from '@/assets/icons/DotsHorizontal';
import DotsVertical from '@/assets/icons/DotsVertical';
import Arrow from '@/assets/icons/Arrow';
import Delete from '@/assets/icons/Delete';
import Edit from '@/assets/icons/Edit';

const art = ARTICLE_ELEMENTS;

const ArticleEditor = ({ article }: IArticleHandler) => {
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

  useLayoutEffect(() => {
    if (articleElements?.length)
      localStorage.setItem(art, JSON.stringify({ articleElements }));
  }, [articleElements]);

  useLayoutEffect(() => {
    if (isOpenEditMenu) {
      setElement('');
      setAction(null);
    } else {
      if (!action) cleanStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenEditMenu]);

  useLayoutEffect(() => {
    if (action === 'add') {
      setIsOpenEditMenu(false);
      setEditIndex(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  useEffect(() => {
    if (article) {
      const articleForEdit = JSON.parse(article.text);

      if (articleForEdit?.articleElements) {
      }
      console.log('articleForEdit', articleForEdit?.articleElements);
      console.log('articleElements ', articleElements);

      setArticleElements(articleForEdit?.articleElements);
      return () => {
        localStorage.removeItem(art);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

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

  const deleteElement = (index: number) => {
    setIsOpenEditMenu(false);

    setArticleElements(prevElements => {
      const updatedParagraphs = [...prevElements];
      updatedParagraphs.splice(index, 1);
      return updatedParagraphs;
    });

    localStorage.removeItem(art);

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

  const editMenuHandler = (index: number) => {
    cleanStates();
    setEditIndex(index);
    setIsOpenEditMenu(!isOpenEditMenu);
  };

  // console.log('');
  // console.log('action', action);
  // console.log('editIndex', editIndex);
  // console.log('element', element);
  // console.log('isOpenEditMenu', isOpenEditMenu);
  // console.log('viewport', viewport);

  return (
    <div className={`${s.articleEditor} ${s[theme]}`}>
      {articleElements?.length ? (
        <>
          <p className={`${s.infoText}`}>{'Редактор статьи'}</p>

          <ul className={`${s.fildList}`}>
            {articleElements.map((el, index) => (
              <li
                key={index}
                className={`${s.fildItem} ${
                  action && editIndex === index ? s[action] : s['element']
                }`}
              >
                {el.name === 'title' ? (
                  <>
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
                        <div className={`${s.techButtons}`}>
                          <div
                            className={`${s.techButton}`}
                            onClick={() => addElement('title')}
                          >
                            {editIndex !== null ? 'Сохронить' : 'Добавить'}
                          </div>
                          <div
                            className={`${s.techButton}`}
                            onClick={() => cleanStates()}
                          >
                            {'Отменить'}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className={s.elementPreview}>
                        <h2 className={`${s.field} ${s.element} ${s.title}`}>
                          {el.text}
                        </h2>

                        <div className={`${s.editElenemtMenu}`}>
                          {isOpenEditMenu && index === editIndex && (
                            <>
                              <div
                                className={`${s.techButton} ${s.edit}`}
                                onClick={() => editElement(index, el.name)}
                              >
                                <Edit fill={colorWhite} />
                              </div>

                              <div
                                className={`${s.techButton} ${s.delete}`}
                                onClick={() => deleteElement(index)}
                              >
                                <Delete fill={colorWhite} />
                              </div>

                              {index !== articleElements.length - 1 && (
                                <div
                                  className={`${s.techButton} ${s.down}`}
                                  onClick={() => moveDown(index)}
                                >
                                  <Arrow fill={colorWhite} direction={'down'} />
                                </div>
                              )}

                              {index !== 0 && (
                                <div
                                  className={`${s.techButton} ${s.up}`}
                                  onClick={() => moveUp(index)}
                                >
                                  <Arrow fill={colorWhite} direction={'up'} />
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        <div>
                          <div
                            className={`${s.threeDotsButton}`}
                            onClick={() => editMenuHandler(index)}
                          >
                            {viewport === 'mobile' ? (
                              <DotsVertical fill={middleGrey} />
                            ) : (
                              <DotsHorizontal fill={middleGrey} />
                            )}
                          </div>
                        </div>
                      </div>
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
                        />
                        <div className={`${s.techButtons}`}>
                          <div
                            className={`${s.techButton}`}
                            onClick={() => addElement('paragraph')}
                          >
                            {editIndex !== null ? 'Сохронить' : 'Добавить'}
                          </div>
                          <div
                            className={`${s.techButton}`}
                            onClick={() => cleanStates()}
                          >
                            {'Отменить'}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className={s.elementPreview}>
                        <p className={`${s.field} ${s.element} ${s.paragraph}`}>
                          {el.text}
                        </p>

                        <div className={`${s.editElenemtMenu}`}>
                          {isOpenEditMenu && index === editIndex && (
                            <>
                              <div
                                className={`${s.techButton} ${s.edit}`}
                                onClick={() => editElement(index, el.name)}
                              >
                                <Edit fill={colorWhite} />
                              </div>

                              <div
                                className={`${s.techButton} ${s.delete}`}
                                onClick={() => deleteElement(index)}
                              >
                                <Delete fill={colorWhite} />
                              </div>

                              {index !== articleElements.length - 1 && (
                                <div
                                  className={`${s.techButton} ${s.down}`}
                                  onClick={() => moveDown(index)}
                                >
                                  <Arrow fill={colorWhite} direction={'down'} />
                                </div>
                              )}

                              {index !== 0 && (
                                <div
                                  className={`${s.techButton} ${s.up}`}
                                  onClick={() => moveUp(index)}
                                >
                                  <Arrow fill={colorWhite} direction={'up'} />
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        <div
                          className={`${s.threeDotsButton}`}
                          onClick={() => editMenuHandler(index)}
                        >
                          {viewport === 'mobile' ? (
                            <DotsVertical fill={middleGrey} />
                          ) : (
                            <DotsHorizontal fill={middleGrey} />
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className={s.addElement}>
        <p className={`${s.infoText}`}>
          {articleElements?.length ? 'Дополнить контент' : 'Основной контент'}
        </p>

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
              />
            )}

            <div className={`${s.techButtons}`}>
              <div
                className={`${s.techButton}`}
                onClick={() =>
                  addElement(element === 'title' ? 'title' : 'paragraph')
                }
              >
                {editIndex !== null ? 'Сохронить' : 'Добавить'}
              </div>
              <div className={`${s.techButton}`} onClick={() => cleanStates()}>
                {'Отменить'}
              </div>
            </div>
          </>
        )}

        {!element && (
          <div className={`${s.addElementButtons}`}>
            <Button
              fn={() => {
                setElement('title');
                setAction('add');
              }}
            >
              Заголовок
            </Button>
            <Button
              fn={() => {
                setElement('text');
                setAction('add');
              }}
            >
              Параграф
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleEditor;
