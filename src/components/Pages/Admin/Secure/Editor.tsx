/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGlobalState } from '@/Global/context/use';
import useModal from '@/GraphQL/hooks/useModal';
import useQuery from '@/GraphQL/hooks/useQuery';
import * as gc from '@/config/global';
import * as gu from '@/utils/global';
import * as u from '../utils';
import ReturnIcon from '@/assets/icons/ReturnIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import SaveIcon from '@/assets/icons/SaveIcon';
import Textarea from '@/components/Textarea';
import s from './Dashboard.module.scss';

const { lsArticleKey, defaultImageUrl } = gc.system;

const Editor = () => {
  const [title, setTitle] = useState('Title');
  const [image, setImage] = useState(defaultImageUrl);
  const [text, setText] = useState('');
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isImageInput, setIsImageInput] = useState(false);

  const { app, details } = useGlobalState();
  const modal = useModal();
  const data = useQuery();

  useEffect(() => {
    const lsData = gu.getLS(lsArticleKey);

    if (app.isCreate) {
      console.log('=== CREATE ===');
      handleTitle(lsData ? lsData.title : 'Title');
      handleImage(lsData ? lsData.image : defaultImageUrl);
      handleText(lsData ? lsData.text : '');
    }

    if (app.isEdit && details.article) {
      console.log('=== EDIT ===');
      handleTitle(details.article?.title);
      handleImage(details.article?.image);
      handleText(details.article?.text);
    }

    return () => {
      app.isEdit && gu.delLS(lsArticleKey);
    };
  }, []);

  useEffect(() => {
    if (app.isPending) return;
    if (app.isInit) return app.set(app.config.CREATE);
    app.isCreate && gu.setLS(lsArticleKey, { title, image, text });
  }, [title, image, text]);

  // ------ Handlers:

  const handleTitle = (val: string) => setTitle(val);
  const handleImage = (val: string) => setImage(u.validateUrl(val) || '');
  const handleText = (val: string) => setText(val);

  // ------ Methods:

  const finaly = () => {
    handleTitle('Title');
    handleImage(defaultImageUrl);
    handleText('');
    app.set(app.config.INIT);
    gu.delLS(lsArticleKey);
  };

  const addArticle = async () => {
    if (!title || !image || !text) return;
    modal.set(true);
    modal.setContent(app.config.CREATE);
    console.log('editor addArticle');
  };

  const updateArticle = async () => {
    const id = details.article?.id;
    if (!id || !title || !image || !text) return;
    modal.set(true);
    modal.setContent(app.config.EDIT);
    console.log('editor updateArticle', true);
  };

  const deleteArticle = async () => {
    const id = details.article?.id;
    if (!id) return;
    modal.set(true);
    modal.setContent(app.config.DELETE);
    console.log('editor deleteArticle', true);
  };

  // ------ Approve:

  const approveCreate = async () => {
    app.set(app.config.PENDING);
    const res = await data.add({ title, image, text });
    console.log('created:', res);
    res && finaly();
  };

  const approveUpdate = async (id: string) => {
    app.set(app.config.PENDING);
    const res = await data.edit(id, { title, image, text });
    console.log('updated:', res);
    res && finaly();
  };

  const approveDelete = async (id: string) => {
    if (!details.article) return;
    const deleted = await data.del(id);
    console.log('deleted:', deleted?.success);
    deleted?.success && finaly();
  };

  const isModal = () => modal.is;

  return (
    <section className={s.editorSection}>
      {isModal() && (
        <modal.Modal>
          {app.isCreate ? (
            <modal.CreateArticle action={approveCreate} />
          ) : (
            <>
              {modal.content === app.config.EDIT ? (
                <modal.UpdateArticle action={approveUpdate} />
              ) : (
                modal.content === app.config.DELETE && (
                  <modal.DeleteArticle action={approveDelete} />
                )
              )}
            </>
          )}
        </modal.Modal>
      )}

      <div className={s.hero}>
        <Image
          src={image || defaultImageUrl}
          className={s.heroImage}
          fill
          priority={true}
          alt='Astraia picture'
          onClick={() => setIsImageInput(true)}
        />

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

        <h1 className={s.title} onClick={() => setIsTitleInput(true)}>
          {title}
        </h1>

        <div className={s.returnBlock} onClick={() => app.set(app.config.INIT)}>
          <ReturnIcon />
        </div>

        <div className={s.deleteBlock} onClick={() => deleteArticle()}>
          <DeleteIcon />
        </div>

        <div
          className={s.saveBlock}
          onClick={app.isCreate ? addArticle : updateArticle}
        >
          <SaveIcon />
        </div>
      </div>

      <Textarea text={text} handleText={handleText} />
    </section>
  );
};

export default Editor;

/*
https://res.cloudinary.com/astraia/image/upload/v1687003862/cld-sample-3.jpg
*/
