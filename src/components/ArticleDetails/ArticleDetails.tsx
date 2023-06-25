import Image from 'next/image';
import useProportion from '@/hooks/useProportion';
import s from './ArticleDetails.module.scss';

const ArticleDetails = (props: any) => {
  const { imageData, title, description, author, id, articleElements } = props;

  const { width, height } = useProportion(900, 450, 300);

  return (
    <div className={s.articleDetails}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <p className={s.author}>{author}</p>
      {/* <p className={s.id}>{id}</p> */}

      {imageData && (
        <div className={s.thumb}>
          <Image src={imageData} alt='Uploaded' width={width} height={height} />
        </div>
      )}

      <div className={s.articleWrap}>
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
    </div>
  );
};

export default ArticleDetails;
