import { ChangeEvent } from 'react';
import normalizeImageSize from './normalizeImageSize';
import cropImage from './cropImage';

type SetImageData = (data: string) => void;

const base64Converter =
  (setImageData: SetImageData) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = normalizeImageSize(img); // scale image
          const croppedCanvas = cropImage(canvas); // crop image
          const base64String = croppedCanvas.toDataURL(file.type, 0.7); // 0.8 - normal quality
          setImageData(base64String);
        };
      };

      reader.readAsDataURL(file);
    }
  };

export default base64Converter;
