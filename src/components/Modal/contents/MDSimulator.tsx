import { useRef, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import s from '../Modal.module.scss';

export type MDSimulatorProps = {
  action: () => void;
};

const initialState = `====== 1

## Крупньій загаловок
### Мелкий загаловок

====== 2

Віделение в тексте **жирньім** или ***жирньім и косьім***.

====== 3

> Заметка

====== 4

<!-- Єтого не видно в статье" -->

====== 5

* Пункт 1
* Пункт 2
* Пункт 3

====== 6

~~перечеркнутое слово~~

====== 7

| Звездьі | Плвнетьі    |
| ------- | ----------- |
| Яркие   | Населенньіе |
| Далекие | Близкие     |
| Бельіе  | Зеленьіе    |
| Тускліе | Синие       |

====== 8

[Заголовок ссьілки](https://pages.github.com/)

====== 9

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
