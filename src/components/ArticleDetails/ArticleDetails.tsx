import Image from 'next/image';
import useProportion from '@/hooks/useProportion';
import s from './ArticleDetails.module.scss';
import { MONTHS } from '@/constants';
import useViewport from '@/hooks/useViewport';
import { CldImage } from 'next-cloudinary';

const convertDate = (timestamp: string) => {
  const today = 'Сегодня';
  const date = timestamp ? timestamp.split('-') : today;
  const months = MONTHS;
  return timestamp
    ? `${date[2]} ${months[Number(date[1]) - 1]} ${date[0]}`
    : today;
};

const ArticleDetails = (props: any) => {
  const {
    imageData,
    title,
    description,
    author,
    id,
    timestamp,
    articleElements,
  } = props;

  const { viewport } = useViewport();
  const { width, height } = useProportion(
    900,
    450,
    viewport === 'tablet' ? 768 : viewport === 'desktop' ? 900 : 390
  );

  return (
    <div className={s.articleDetails}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <div className={s.publication}>
        <p className={s.author}>{`Автор: ${author}`}</p>
        <p className={s.timestamp}>{`Публикация: ${convertDate(timestamp)}`}</p>
      </div>

      {imageData && (
        <div className={s.thumb}>
          <Image
            width='900'
            height='450'
            src='https://res.cloudinary.com/astraia/image/upload/v1688401749/astraia_uploads/space_uyhfig.jpg'
            alt='Description of my image'
          />
          {/* <Image src={imageData} alt='Uploaded' width={width} height={height} /> */}
        </div>
      )}

      <p className={s.id}>{`ID: ${id || '000'}`}</p>

      <div className={s.articleElements}>
        {articleElements.map(
          (el: { name: string; text: string }, index: number) =>
            el.name === 'title' ? (
              <h3 className={s.subTitle} key={index}>
                {el.text}
              </h3>
            ) : (
              <p className={s.paragraph} key={index}>
                {el.text}
              </p>
            )
        )}
      </div>
      <CldImage
        width='900'
        height='450'
        src='v1688405354/astraia_uploads/900450_yonh65'
        alt='Description of my image'
      />
    </div>
  );
};

export default ArticleDetails;
