/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as u from '../utils';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import Textarea from '@/components/Textarea';
import s from './Dashboard.module.scss';

const { defaultImageUrl } = gc.system;
const lsLabel = '++_astraia_article';

const Editor = () => {
  const [status, setStatus] = useState('init');
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(defaultImageUrl);
  const [text, setText] = useState('');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  useEffect(() => {
    const lsData = gu.getLS(lsLabel);
    // console.log('lsData', lsData);
    handleTitle(lsData ? lsData.title : 'Title');
    handleImage(lsData ? lsData.image : defaultImageUrl);
    handleText(lsData ? lsData.text : '');
  }, []);

  /*
  https://res.cloudinary.com/astraia/image/upload/v1687003862/cld-sample-3.jpg
  */

  useEffect(() => {
    console.log(2);
    if (status === 'init') return handleStatus('cteate');
    console.log(3);
    status === 'cteate' && gu.setLS(lsLabel, { title, image, text });
  }, [title, image, text]);

  console.log(0, image);

  const handleStatus = (val: string) => setStatus(val);
  const handleTitle = (val: string) => setTitle(val);
  const handleImage = (val: string) => setImage(u.validateUrl(val) || '');
  const handleText = (val: string) => setText(val);

  return (
    <section className={s.dashboard}>
      <div className={s.hero}>
        <Image
          src={image}
          // src={image ? image : defaultImageUrl}
          className={s.heroImage}
          fill
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
      </div>

      <Textarea text={text} handleText={handleText} />
    </section>
  );
};

export default Editor;
