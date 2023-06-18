import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs/Crumbs';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { useGlobalContext } from '@/context/GlobalContext';
import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import GET_ARTICLES from '@/gql/getArticles';
import { ApolloClient, InMemoryCache } from '@apollo/client';

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

  // console.log('paths', paths);

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

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['articles', 'id']}>
        <h2 className={s.title}>{article.title}</h2>
      </Crumbs>

      <article className={s.article}>
        <div className={s.thumb}>
          <Image
            className={s.image}
            src={article.image}
            alt={article.title}
            width={900}
            height={400}
          />
        </div>
        <p>{article.text}</p>
      </article>
    </section>
  );
};

export default Article;
