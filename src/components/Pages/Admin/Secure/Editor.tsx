/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGlobalState } from '@/Global/context/use';
import useQuery from '@/GraphQL/hooks/useQuery';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import * as u from '../utils';
import * as config from '../config';
import Textarea from '@/components/Textarea';
import SaveButton from './SaveButton';
import s from './Dashboard.module.scss';

const { lsArticleKey, defaultImageUrl } = gc.system;
const { init, create, pending } = config.dashboard.status;

const Editor = () => {
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(defaultImageUrl);
  const [text, setText] = useState('');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  const { app } = useGlobalState();
  const data = useQuery();

  console.log('status', app.status);

  useEffect(() => {
    const lsData = gu.getLS(lsArticleKey);
    handleTitle(lsData ? lsData.title : 'Title');
    handleImage(lsData ? lsData.image : defaultImageUrl);
    handleText(lsData ? lsData.text : '');
  }, []);

  const addArticle = async () => {
    if (!title || !image || !text) return;
    app.set(pending);
    const res = await data.add({ title, image, text });
    console.log('res', res);
    if (res) {
      handleTitle('Title');
      handleImage(defaultImageUrl);
      handleText('');
      app.set(init);
      gu.delLS(lsArticleKey);
    }
  };

  /*
  https://res.cloudinary.com/astraia/image/upload/v1687003862/cld-sample-3.jpg
  */

  useEffect(() => {
    if (app.status === pending) return;
    if (app.status === init) return app.set(create);
    app.status === create && gu.setLS(lsArticleKey, { title, image, text });
  }, [title, image, text]);

  const handleTitle = (val: string) => setTitle(val);
  const handleImage = (val: string) => setImage(u.validateUrl(val) || '');
  const handleText = (val: string) => setText(val);

  return (
    <section className={s.dashboard}>
      <div className={s.hero}>
        <Image
          src={image || defaultImageUrl}
          className={s.heroImage}
          fill
          priority={true}
          alt='Astraia picture'
          onClick={() => setIsImageInput(true)}
        />

        <h1 className={s.title} onClick={() => setIsTitleInput(true)}>
          {title}
        </h1>

        {isTitleInput && (
          <input
            className={s.titleInput}
            value={title}
            onChange={e => handleTitle(e.target.value)}
            onBlur={() => setIsTitleInput(false)}
            placeholder='Title...'
            maxLength={65}
          />
        )}

        {isImageInput && (
          <input
            className={s.imageInput}
            value={image}
            onChange={e => handleImage(e.target.value)}
            onBlur={() => setIsImageInput(false)}
          />
        )}
        <div className={s.buttonBlock} onClick={addArticle}>
          <SaveButton />
        </div>
      </div>

      <Textarea text={text} handleText={handleText} />
    </section>
  );
};

export default Editor;
