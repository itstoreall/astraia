import defaultImage from '@/assets/images/defaultImage.jpg';

const prod = 'https://esoterrium.space'; // https://astraia.storeall.com.ua
const dev = `http://localhost:${process.env.NEXT_PUBLIC_PORT || '3000'}`;

export const system = {
  labelAstraia: 'astraia',
  labelEsoterrium: 'esoterrium',
  domain: prod,
  defaultImage,
  defaultImageUrl: `${prod}/_next/static/media/defaultImage.c592ac5f.jpg`,
  lsArticleKey: '++_esoterrium_article',
  lsViewsKey: `++_esoterrium_views:`,
  preloader: { timeout: 2000 }
};

/*
export const months = [
  'січ',
  'лют',
  'бер',
  'квіт',
  'трав',
  'черв',
  'лип',
  'серп',
  'вер',
  'жовт',
  'лист',
  'груд'
];
*/

export const page = {
  home: {
    label: 'home',
    pathname: '/'
  },
  admin: {
    label: 'admin',
    pathname: 'admin'
  },
  dashboard: {
    label: 'dashboard',
    pathname: 'admin'
  },
  articles: {
    label: 'articles',
    pathname: 'articles'
  },
  article: {
    label: 'article',
    pathname: 'articles/id'
  }
};

export const meta = {
  metadataBase: prod || dev,
  // title: 'ASTRAIA',
  title: 'Esoterrium',
  description: 'Esoterrium - духовное саморазвитие',
  url: prod,
  siteName: 'Esoterrium',
  defaultImage: {
    url: `/_next/static/media/defaultImage.c592ac5f.jpg`,
    width: 1200,
    height: 630,
    alt: 'Esoterrium picture'
  },
  authors: ['Astraia', 'Mila']
};

export const articleStatus = {
  created: 'created',
  published: 'published',
  unpublished: 'unpublished',
  updated: 'updated',
  failed: 'failed'
};
