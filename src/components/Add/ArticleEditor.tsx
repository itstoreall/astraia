import { ReactNode, useState } from 'react';
import Button from '../Button';

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

  const handleAddParagraph = (name: string) => {
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
          { name, text: textareaValue.trim() },
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
    return paragraphs.map((paragraph, index) => {
      if (paragraph.name === 'title') {
        return <h2 key={index}>{paragraph.text}</h2>;
      } else {
        return <p key={index}>{paragraph.text}</p>;
      }
    });
  };

  console.log('paragraphs', paragraphs);

  return (
    <div>
      <textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder='Enter text here...'
      />
      <Button fn={() => handleAddParagraph('paragraph')}>
        {editIndex !== null ? 'Update Paragraph' : 'Add Paragraph'}
      </Button>
      <Button fn={() => handleAddParagraph('title')}>
        {editIndex !== null ? 'Update Title' : 'Add Title'}
      </Button>

      <div>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            {paragraph.name === 'title' ? (
              <h2>{paragraph.text}</h2>
            ) : (
              <p>{paragraph.text}</p>
            )}
            <Button fn={() => handleEditParagraph(index)}>Edit</Button>
            <Button fn={() => handleDeleteParagraph(index)}>Delete</Button>
            <Button fn={() => handleMoveUp(index)}>Move Up</Button>
            <Button fn={() => handleMoveDown(index)}>Move Down</Button>
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
