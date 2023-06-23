import Image from 'next/image';
// import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { IArticleElement } from '@/interfaces';
import { useGlobalContext } from '@/context/GlobalContext';
import { MOBILE, TABLET, DESKTOP } from '@/styles/vars';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs';
import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import GET_ARTICLES from '@/gql/getArticles';
import useViewport from '@/hooks/useViewport';
import useProportion from '@/hooks/useProportion';

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: 'https://magic-api-vercel.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ARTICLES,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  const paths = data.articles.map(({ id }: any) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  const client = new ApolloClient({
    uri: 'https://magic-api-vercel.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_ARTICLE_BY_ID,
    variables: { id },
  });

  if (!data || !data.getArticleById) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: data.getArticleById,
    },
  };
};

const Article = ({ article }: any) => {
  const { theme } = useGlobalContext();
  const { viewport } = useViewport();
  const { width, height } = useProportion(
    2,
    1,
    viewport === 'mobile' ? MOBILE : viewport === 'tablet' ? TABLET : DESKTOP
  );

  const articleText = JSON.parse(article?.text).articleElements;

  const convertToArticle = () =>
    articleText ? (
      articleText?.map((paragraph: IArticleElement, index: number) =>
        paragraph.name === 'title' ? (
          <h2 key={index}>{paragraph.text}</h2>
        ) : (
          <p key={index}>{paragraph.text}</p>
        )
      )
    ) : (
      <p>Error: elements of the article are missing!</p>
    );

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['articles', 'id']}>
        <h2 className={s.title} data-tooltip>
          {article.title}
        </h2>
      </Crumbs>

      <article className={s.article}>
        <div className={s.thumb}>
          <Image
            className={s.image}
            src={article.image}
            alt={article.title}
            width={width}
            height={height}
          />
        </div>
        {/* <div className={s.thumb}>
          <Image
            className={s.image}
            src={article.image}
            alt={article.title}
            width={900}
            height={400}
          />
        </div> */}
        <p>{article?.title}</p>
        <p>{article?.description}</p>
        <p>{article?.author}</p>
        <div>{convertToArticle()}</div>
      </article>
    </section>
  );
};

export default Article;
