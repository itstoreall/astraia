import { useRef, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import s from '../Modal.module.scss';

export type MDSimulatorProps = {
  action: () => void;
};

const initialState = `
## Крупньій загаловок
### Мелкий загаловок

Віделение в тексте **жирньім** или ***жирньім и косьім***.

> Заметка 

<!-- Єтого не видно в статье" -->

* Пункт 1
* Пункт 2
* Пункт 3

~~перечеркнутое слово~~

| Звездьі | Плвнетьі    |
| ------- | ----------- |
| Яркие   | Населенньіе |
| Далекие | Близкие     |
| Бельіе  | Зеленьіе    |
| Тускліе | Синие       |

[Заголовок ссьілки](https://pages.github.com/)

![Название изображения](https://res.cloudinary.com/astraia/image/upload/v1687003862/cld-sample-3.jpg)
`;

const MDSimulator = ({ action }: MDSimulatorProps) => {
  const [text, setText] = useState(initialState);

  const taRef = useRef<HTMLTextAreaElement>(null);

  const handleText = (val: string) => setText(val);

  return (
    <div className={`${s.contentBlock} ${s.mdSimulator}`}>
      <div className={s.preview}>
        <MDEditor.Markdown source={text} />
      </div>

      <div className={s.editor}>
        <textarea
          ref={taRef}
          className={s.textarea}
          value={text}
          onChange={e => handleText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MDSimulator;
