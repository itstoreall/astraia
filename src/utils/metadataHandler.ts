import { Metadata } from 'next';
// import { IArticle } from '@/interfaces';
import * as gc from '@/config/global';
import { Article } from '@/types';

const defaultImage = {
  url: `${gc.meta.gen.domain}/${gc.meta.gen.defaultImagePath}`, // _next/static/media/defaultImage.d4887a00.jpg
  width: 1200,
  height: 675,
  alt: gc.meta.gen.blogTitle
};

export const home = {
  title: gc.meta.home.meta.title,
  description: gc.meta.home.meta.description,
  openGraph: {
    title: gc.meta.home.meta.title,
    description: gc.meta.home.meta.description,
    url: gc.meta.gen.domain,
    siteName: gc.meta.gen.blogTitle,
    images: [defaultImage],
    type: 'website'
  }
};

const articles = {
  title: gc.meta.articles.meta.title,
  description: gc.meta.articles.meta.description,
  openGraph: {
    title: gc.meta.articles.meta.title,
    description: gc.meta.articles.meta.description,
    url: `${gc.meta.gen.domain}${gc.meta.articles.pathname}`,
    siteName: gc.meta.gen.blogTitle,
    images: [defaultImage],
    type: 'article'
  }
};

const metadataHandler = (path: string, article?: Article): Metadata => {
  return path === gc.meta.home.pathname
    ? home
    : path === gc.meta.articles.pathname
    ? articles
    : path === gc.meta.details.pathname && article
    ? {
        title: article.title,
        description: article.description,
        openGraph: {
          title: article.title,
          description: article.description,
          url: `${gc.meta.gen.domain}${gc.meta.articles.pathname}/${article.id}`,
          siteName: gc.meta.gen.blogTitle,
          images: [
            {
              url: gc.system.defaultImageUrl,
              // width: 900,
              // height: 450,
              alt: article.title
            }
          ],
          type: 'article'
        }
      }
    : home;
};

export default metadataHandler;
