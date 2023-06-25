import Image from 'next/image';
import useProportion from '@/hooks/useProportion';
import { useAddArticleContext } from '@/context/AddArticleContext';
import s from './Add.module.scss';
import base64Converter from '../../utils/uploadImageHandler';

const ImageUploader = () => {
  const { imageData, setImageData } = useAddArticleContext();
  const { width, height } = useProportion(900, 450, 300);

  return (
    <div className={s.imageUploader}>
      {imageData && (
        <div className={s.thumb}>
          <Image src={imageData} alt='Uploaded' width={width} height={height} />
        </div>
      )}
      <label>
        Выбрать изображение
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
