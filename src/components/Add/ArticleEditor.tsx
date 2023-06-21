import { useState } from 'react';
import { ChangeTextareaValue, MoveElement } from '@/types';
import { IArticleElement } from '@/interfaces';
import useProportion from '@/hooks/useProportion';
import Button from '../Button';
import { useAddArticleContext } from '@/context/AddArticleContext';

const ArticleEditor = () => {
  const [element, setElement] = useState<string>('');
  const [textareaValue, setTextareaValue] = useState('');
  // const [articleElements, setArticleElements] = useState<IArticleElement[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isDisplayArticle, setIsDisplayArticle] = useState<boolean>(false);

  const { width } = useProportion(900, 1, 900);
  const { articleElements, setArticleElements } = useAddArticleContext();

  const changeTextareaValue: ChangeTextareaValue = event =>
    setTextareaValue(event.target.value);

  const addElement = (name: string) => {
    if (textareaValue.trim() !== '') {
      console.log(1);

      if (editIndex !== null) {
        console.log(2);

        setArticleElements(prevElements => {
          const updatedParagraphs = [...prevElements];
          updatedParagraphs[editIndex].text = textareaValue.trim();
          return updatedParagraphs;
        });
        setEditIndex(null);
      } else {
        console.log(3);

        setArticleElements(prevElements => [
          ...prevElements,
          { name, text: textareaValue.trim() },
        ]);
      }

      console.log(4);
      setTextareaValue('');
      setElement('');
      return;
    }

    console.log(5);
    console.log(5, editIndex);
    editIndex !== null && deleteElement(editIndex);
  };

  const cleanStates = () => {
    setEditIndex(null);
    setElement('');
    setTextareaValue('');
  };

  const editElement = (idx: number, element: string) => {
    setElement(element);
    setEditIndex(idx);
    setTextareaValue(articleElements[idx].text);
  };

  const deleteElement = (index: number) => {
    console.log('del 1');

    setArticleElements(prevElements => {
      console.log('del 2');
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

  const convertToArticle = () => {
    return articleElements.map((paragraph, index) => {
      if (paragraph.name === 'title') {
        return <h2 key={index}>{paragraph.text}</h2>;
      } else {
        return <p key={index}>{paragraph.text}</p>;
      }
    });
  };

  const setTextareaSize = () => {
    const textareaWidth = width - 120;

    return { width: textareaWidth, height: 250 };
  };

  const articleElementsJSON = JSON.stringify(articleElements);
  console.log(articleElementsJSON);

  const array = JSON.parse(articleElementsJSON);
  console.log('arr-->', array);

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

      <Button fn={() => setIsDisplayArticle(!isDisplayArticle)}>
        {isDisplayArticle ? 'Редактор' : 'Предпросмотр'}
      </Button>
    </div>
  );
};

export default ArticleEditor;

/* object
import { ReactNode, useState } from 'react';

interface Paragraph {
  name: string;
  text: string;
}

const ArticleEditor = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };

  const handleAddParagraph = () => {
    if (textareaValue.trim() !== '') {
      if (editIndex !== null) {
        setParagraphs(prevParagraphs => {
          const updatedParagraphs = [...prevParagraphs];
          updatedParagraphs[editIndex].text = textareaValue.trim();
          return updatedParagraphs;
        });
        setEditIndex(null);
      } else {
        setParagraphs(prevParagraphs => [
          ...prevParagraphs,
          { name: 'paragraph', text: textareaValue.trim() },
        ]);
      }
      setTextareaValue('');
    }
  };

  const handleEditParagraph = (index: number) => {
    setEditIndex(index);
    setTextareaValue(paragraphs[index].text);
  };

  const handleDeleteParagraph = (index: number) => {
    setParagraphs(prevParagraphs => {
      const updatedParagraphs = [...prevParagraphs];
      updatedParagraphs.splice(index, 1);
      return updatedParagraphs;
    });
  };

  const moveElementInArray = (
    array: Paragraph[],
    fromIndex: number,
    toIndex: number
  ) => {
    const element = array[fromIndex];
    array.splice(fromIndex, 1);
    array.splice(toIndex, 0, element);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      setParagraphs(prevParagraphs => {
        const updatedParagraphs = [...prevParagraphs];
        moveElementInArray(updatedParagraphs, index, index - 1);
        return updatedParagraphs;
      });
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < paragraphs.length - 1) {
      setParagraphs(prevParagraphs => {
        const updatedParagraphs = [...prevParagraphs];
        moveElementInArray(updatedParagraphs, index, index + 1);
        return updatedParagraphs;
      });
    }
  };

  const convertToArticle = () => {
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph.text}</p>
    ));
  };

  return (
    <div>
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder='Enter text here...'
      />
      <button onClick={handleAddParagraph}>
        {editIndex !== null ? 'Update Paragraph' : 'Add Paragraph'}
      </button>

      <div>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph.text}</p>
            <button onClick={() => handleEditParagraph(index)}>Edit</button>
            <button onClick={() => handleDeleteParagraph(index)}>Delete</button>
            <button onClick={() => handleMoveUp(index)}>Move Up</button>
            <button onClick={() => handleMoveDown(index)}>Move Down</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Article:</h2>
        {convertToArticle()}
      </div>
    </div>
  );
};

export default ArticleEditor;
// */

/* default
import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';

const ArticleEditor = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [editingParagraph, setEditingParagraph] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };
  const handleExistingParagraph = (
    event: ChangeEvent<HTMLTextAreaElement>,
    idx: number
  ) => {
    // setTextareaValue(event.target.value);
    console.log('event.target.value', event.target.value);
    console.log('idx', idx);
    // paragraphs[idx];
    setParagraphs(prevParagraphs => [(paragraphs[idx] = event.target.value)]);
    // setParagraphs(prevParagraphs => [
    //   ...prevParagraphs,
    //   (prevParagraphs[idx] = event.target.value),
    // ]);
  };

  console.log('paragraphs -->', paragraphs);

  // const handleAddParagraph = () => {
  //   if (textareaValue.trim() !== '') {
  //     setParagraphs(prevParagraphs => [
  //       ...prevParagraphs,
  //       textareaValue.trim(),
  //     ]);
  //     setTextareaValue('');
  //   }
  // };

  const handleAddParagraph = () => {
    if (textareaValue.trim() !== '') {
      if (editIndex !== null) {
        setParagraphs(prevParagraphs => {
          const updatedParagraphs = [...prevParagraphs];
          updatedParagraphs[editIndex] = textareaValue.trim();
          return updatedParagraphs;
        });
        setEditIndex(null);
      } else {
        setParagraphs(prevParagraphs => [
          ...prevParagraphs,
          textareaValue.trim(),
        ]);
      }
      setTextareaValue('');
    }
  };

  const handleEditParagraph = (index: number) => {
    setEditIndex(index);
    setTextareaValue(paragraphs[index]);
  };

  const handleDeleteParagraph = (index: number) => {
    setParagraphs(prevParagraphs => {
      const updatedParagraphs = [...prevParagraphs];
      updatedParagraphs.splice(index, 1);
      return updatedParagraphs;
    });
  };

  const moveElementInArray = (
    array: string[],
    fromIndex: number,
    toIndex: number
  ) => {
    const element = array[fromIndex];
    array.splice(fromIndex, 1);
    array.splice(toIndex, 0, element);
  };

  const handleMoveUp = (index: number) => {
    if (index > 0) {
      setParagraphs(prevParagraphs => {
        const updatedParagraphs = [...prevParagraphs];
        moveElementInArray(updatedParagraphs, index, index - 1);
        return updatedParagraphs;
      });
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < paragraphs.length - 1) {
      setParagraphs(prevParagraphs => {
        const updatedParagraphs = [...prevParagraphs];
        moveElementInArray(updatedParagraphs, index, index + 1);
        return updatedParagraphs;
      });
    }
  };

  const convertToArticle = () => {
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  // console.log('paragraphs', paragraphs);
  // console.log('editingParagraph', editingParagraph);

  return (
    <div>
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder='Enter text here...'
      />

      <Button fn={handleAddParagraph}>Add Paragraph</Button>

      <div>
        {paragraphs.map((paragraph: string, idx: number) => (
          <div key={idx}>
            <p onClick={() => setEditingParagraph(idx)} key={idx}>
              {paragraph}
            </p>

            <button onClick={() => handleEditParagraph(idx)}>Edit</button>
            <button onClick={() => handleDeleteParagraph(idx)}>Delete</button>
            <button onClick={() => handleMoveUp(idx)}>Move Up</button>
            <button onClick={() => handleMoveDown(idx)}>Move Down</button>

            {editingParagraph === idx && (
              <textarea
                value={paragraphs[idx]}
                onChange={e => handleExistingParagraph(e, idx)}
                placeholder='Enter text here...'
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <h2>Article:</h2>
        {convertToArticle()}
      </div>
    </div>
  );
};

export default ArticleEditor;
// */
