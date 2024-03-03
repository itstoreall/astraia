import { getServerArticle } from '@/GraphQL/server/articles.service';
import metadataHandler from '@/utils/metadataHandler';
import Article from '@/components/Pages/Articles/Article';
import { GenMetadata, ParamsProps } from '@/types';
import * as gc from '@/config/global';

export const generateMetadata: GenMetadata = async ({ params: { id } }) => {
  const article = await getServerArticle(id);
  return metadataHandler(gc.meta.details.pathname, article);
};

const ArticlePage = async ({ params: { id } }: ParamsProps) => {
  const article = await getServerArticle(id);

  if (!article) return <p>no article</p>;

  return <Article article={article} />;
};

export default ArticlePage;
