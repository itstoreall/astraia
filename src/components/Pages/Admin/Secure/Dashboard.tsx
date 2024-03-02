'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ApolloProvider from '@/gql/provider/ApolloProvider';
import * as u from '../utils';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import Textarea from '@/components/Textarea';
import s from './Dashboard.module.scss';

const { defaultImageUrl } = gc.system;

const Dashboard = () => {
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(defaultImageUrl);
  const [text, setText] = useState('');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  useEffect(() => {
    gu.setLS('++_astraia_article', { title, image, text });
  }, [title, image, text]);

  // const client = useApolloProvider();

  const handleTitle = (title: string) => setTitle(title);
  const handleImage = (url: string) => setImage(u.validateUrl(url) || '');
  const handleText = (text: string) => setText(text);

  return (
    <ApolloProvider>
      <section className={s.dashboard}>
        <div className={s.hero}>
          <Image
            src={image ? image : defaultImageUrl}
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
    </ApolloProvider>
  );
};

export default Dashboard;
