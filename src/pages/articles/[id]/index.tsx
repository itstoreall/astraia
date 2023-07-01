// import { ApolloClient, InMemoryCache } from '@apollo/client';
import PageLoading from '@/components/PageLoading';
import { useGlobalContext } from '@/context/GlobalContext';
import GET_ARTICLES from '@/gql/getArticles';
import GET_ARTICLE_BY_ID from '@/gql/getArticleById';
import client from '@/utils/apolloClient';
import s from '../../page.module.scss';
import Crumbs from '@/components/Crumbs';
import ArticleDetails from '@/components/ArticleDetails/ArticleDetails';
import { IArticle } from '@/interfaces';

export const getStaticPaths = async () => {
  // const client = new ApolloClient({
  //   uri: 'https://magic-api-vercel.vercel.app/',
  //   cache: new InMemoryCache(),
  // });

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

  // const client = new ApolloClient({
  //   uri: 'https://magic-api-vercel.vercel.app/',
  //   cache: new InMemoryCache(),
  // });

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

const Article = ({ article }: { article: IArticle }) => {
  const { theme } = useGlobalContext();

  const articleText = JSON.parse(article?.text).articleElements;

  return (
    <section className={`${s.page} ${s[theme]}`}>
      <Crumbs routes={['articles', 'id']}>
        <h2 className={s.title} data-tooltip>
          {article.title}
        </h2>
      </Crumbs>

      <PageLoading>
        <article className={s.article}>
          <ArticleDetails
            id={article.id}
            imageData={article.image}
            title={article?.title}
            description={article?.description}
            author={article?.author}
            views={article?.views}
            tags={article?.tags}
            timestamp={article?.timestamp}
            articleElements={articleText}
          />
        </article>
      </PageLoading>
    </section>
  );
};

export default Article;
