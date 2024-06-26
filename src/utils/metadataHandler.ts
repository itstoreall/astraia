import { Metadata } from 'next';
import { Article } from '@/Global/types';
import * as gc from '@/config/global';

export const home = {
  title: gc.meta.title,
  description: gc.meta.description,
  openGraph: {
    title: gc.meta.title,
    description: gc.meta.description,
    url: gc.meta.url,
    siteName: gc.meta.siteName,
    images: [gc.meta.defaultImage],
    type: 'website'
  }
};

export const admin = {
  title: 'ADMIN',
  description: 'Admin dashboard',
  openGraph: {
    title: 'Admin',
    description: 'Admin dashboard',
    url: `${gc.meta.url}/${gc.page.admin.pathname}`,
    siteName: gc.meta.siteName,
    images: [gc.meta.defaultImage],
    type: 'website'
  }
};

const articles = {
  title: 'Статьи | Esoterrium',
  description: 'Статьи о тонком мире и духовном саморазвитии',
  openGraph: {
    title: 'Статьи | Esoterrium',
    description: 'Статьи о тонком мире и духовном саморазвитии',
    url: `${gc.meta.url}/${gc.page.articles.pathname}`,
    siteName: gc.meta.siteName,
    images: [gc.meta.defaultImage],
    type: 'website'
  }
};

const metadataHandler = (path: string, article?: Article): Metadata => {
  return path === gc.page.home.pathname
    ? home
    : path === gc.page.admin.pathname
    ? admin
    : path === gc.page.articles.pathname
    ? articles
    : path === gc.page.article.pathname && article
    ? {
        title: article.title,
        description: article.description,
        openGraph: {
          title: article.title,
          description: article.description,
          url: `${gc.meta.url}/${gc.page.articles.pathname}/${article.id}`,
          siteName: gc.meta.siteName,
          images: [{ url: article.image, alt: article.title }],
          type: 'article'
        }
      }
    : home;
};

export default metadataHandler;
