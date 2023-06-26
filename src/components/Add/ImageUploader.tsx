import Image from 'next/image';
import useProportion from '@/hooks/useProportion';
import { useAddArticleContext } from '@/context/AddArticleContext';
import s from './Add.module.scss';
import base64Converter from '../../utils/uploadImageHandler';
import { useEffect } from 'react';

const ImageUploader = () => {
  const { imageData, setImageData, submitError, setSubmitError } =
    useAddArticleContext();
  const { width, height } = useProportion(900, 450, 52);

  useEffect(() => {
    submitError && setSubmitError('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageData]);

  return (
    <div className={s.imageUploader}>
      {imageData && (
        <div className={s.thumb}>
          <Image
            src={imageData}
            alt='Загружаемое изображение'
            width={width}
            height={height}
          />
        </div>
      )}
      <label>
        {imageData ? 'Изменить изображение' : 'Выбрать изображение'}
        <input
          className={s.fileInput}
          type='file'
          accept='.jpg, .jpeg, .png'
          onChange={base64Converter(setImageData)}
        />
      </label>
    </div>
  );
};

export default ImageUploader;
