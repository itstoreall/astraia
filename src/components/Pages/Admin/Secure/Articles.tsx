import Link from 'next/link';
import Image from 'next/image';
import useFetchArticles from '@/hooks/useFetchArticles';
import * as gc from '@/config/global';

const { pathname: adminPathname } = gc.page.admin;

const Articles = () => {
  const { articles } = useFetchArticles();

  console.log('articles ===>', articles);

  if (!articles) return null;

  return (
    <div>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={`/${adminPathname}/${article.id}`}>
              <div
              // className={s.thumb}
              >
                <Image
                  src={article.image}
                  // className={s.cardImage}
                  // fill
                  // sizes='400px'
                  // priority={true}
                  width={60}
                  height={60}
                  alt={article.title}
                  // onClick={() => setIsImageInput(true)}
                />
              </div>

              <div
              // className={s.cardMeta}
              >
                <p>{article.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
