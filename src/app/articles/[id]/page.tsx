import { getServerArticle } from '@/GraphQL/server/articles.service';
import metadataHandler from '@/utils/metadataHandler';
import { GenMetadata, ParamsProps } from '@/types';
import Article from '@/components/Pages/Articles/Article';
import * as gc from '@/config/global';

export const generateMetadata: GenMetadata = async ({ params: { id } }) => {
  const article = await getServerArticle(id);
  return metadataHandler(gc.page.article.pathname, article);
};

const ArticlePage = async ({ params: { id } }: ParamsProps) => {
  const article = await getServerArticle(id); // getCached(id)
  if (!article) return <p>no article</p>;
  return <Article article={article} />;
};

export default ArticlePage;

/* ------ Cache:

import { unstable_cache } from 'next/cache';
const getCached = unstable_cache(
  async id => getServerArticle(id),
  ['++__server_article'],
  { tags: ['++__article'], revalidate: 1 }
);
const article = await getCached(id);

*/
