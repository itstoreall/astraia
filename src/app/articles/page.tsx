import { Metadata } from 'next';
import metadataHandler from '@/utils/metadataHandler';
import * as gc from '@/config/global';
import Articles from '@/components/Pages/Articles';

const { pathname } = gc.page.articles;

export const metadata: Metadata = metadataHandler(pathname);

const ArticlesPage = () => {
  return <Articles />;
};

export default ArticlesPage;
