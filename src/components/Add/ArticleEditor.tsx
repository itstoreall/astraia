import { useEffect, useState } from 'react';
import { ChangeTextareaValue, MoveElement } from '@/types';
// import { IArticleElement } from '@/interfaces';
import { ARTICLE_ELEMENTS } from '@/constants';
import useProportion from '@/hooks/useProportion';
import Button from '../Button';
import { useAddArticleContext } from '@/context/AddArticleContext';

const art = ARTICLE_ELEMENTS;

const ArticleEditor = () => {
  const [element, setElement] = useState<string>('');
  // const [textareaValue, setTextareaValue] = useState('');
  // const [editIndex, setEditIndex] = useState<number | null>(null);
  // const [isDisplayArticle, setIsDisplayArticle] = useState<boolean>(false);

  const { width } = useProportion(900, 1, 900);
  const {
    textareaValue,
    setTextareaValue,
    editIndex,
    setEditIndex,
    isDisplayArticle,
    setIsDisplayArticle,
    articleElements,
    setArticleElements,
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
    setEditIndex(null);
    setElement('');
    setTextareaValue('');
  };

  const changeTextareaValue: ChangeTextareaValue = event =>
    setTextareaValue(event.target.value);

  const addElement = (name: string) => {
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
    setElement(element);
    setEditIndex(idx);
    setTextareaValue(articleElements[idx].text);
  };

  const deleteElement = (index: number) => {
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
    if (index > 0) {
      setArticleElements(prevElements => {
        const updatedParagraphs = [...prevElements];
        moveElementInArray(updatedParagraphs, index, index - 1);
        return updatedParagraphs;
      });
    }
  };

  const moveDown = (index: number) => {
    if (index < articleElements.length - 1) {
      setArticleElements(prevElements => {
        const updatedParagraphs = [...prevElements];
        moveElementInArray(updatedParagraphs, index, index + 1);
        return updatedParagraphs;
      });
    }
  };

  const convertToArticle = () =>
    articleElements.map((paragraph, index) =>
      paragraph.name === 'title' ? (
        <h2 key={index}>{paragraph.text}</h2>
      ) : (
        <p key={index}>{paragraph.text}</p>
      )
    );

  const setTextareaSize = () => {
    const textareaWidth = width - 120;
    return { width: textareaWidth, height: 250 };
  };

  return (
    <div>
      {!isDisplayArticle ? (
        <div>
          <h2>Редактор статьи</h2>
          {element && (
            <>
              <textarea
                style={{
                  width: setTextareaSize().width,
                  height: setTextareaSize().height,
                }}
                value={textareaValue}
                onChange={changeTextareaValue}
                placeholder={
                  element === 'title' ? 'Подзаголовок' : 'Параграф...'
                }
                // rows={getTextAreaRows(textareaValue)}
              />

              <Button
                fn={() =>
                  addElement(element === 'title' ? 'title' : 'paragraph')
                }
              >
                {editIndex !== null ? 'Сохронить' : 'Добавить'}
              </Button>
              <Button fn={() => cleanStates()}>{'Отменить'}</Button>
            </>
          )}

          {!element && (
            <>
              <Button fn={() => setElement('title')}>
                Добавить подзаголовок
              </Button>
              <Button fn={() => setElement('text')}>Добавить параграф</Button>
            </>
          )}

          <div>
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
          </div>
        </div>
      ) : (
        <div>
          <h2>Предпросмотр статьи</h2>
          {convertToArticle()}
        </div>
      )}

      {/* <Button fn={() => setIsDisplayArticle(!isDisplayArticle)}>
        {isDisplayArticle ? 'Редактор' : 'Предпросмотр'}
      </Button> */}
    </div>
  );
};

export default ArticleEditor;
