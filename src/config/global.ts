import defaultImage from '@/assets/images/defaultImage.jpg';
import * as constants from '@/constants';

// const ipfsLink = process.env.ipfsLink;

// const defaultTheme = constants.THEME_BY_DEFAULT;
const domain = constants.SITE_DOMAIN;
// const blogName = constants.BLOG_NAME;
const blogTitle = constants.BLOG_TITLE;
// const defaultImagePath = `_next/static/media/defaultImage.${constants.DEFAULT_IMAGE_ID}.jpg`;
// const ipfs = `${ipfsLink}`; // ${ipfsLink}/${blogName}-image.jpg
const lsViewsKey = constants.LS_VIEWS_KEY;
// const lsFilterKey = constants.LS_FILTER_KEY;
const months = constants.MONTHS;

export const system = {
  blog: 'astraia',
  defaultImage,
  defaultImageUrl:
    'https://astraia.storeall.com.ua/_next/static/media/defaultImage.c592ac5f.jpg'
};

export const meta = {
  gen: {
    // defaultTheme,
    domain,
    blogTitle,
    defaultImagePath: system.defaultImageUrl,
    // ipfs,
    lsViewsKey,
    // lsFilterKey,
    months,
    preloader: { timeout: 2000 }
  },
  home: {
    pathname: '/',
    meta: {
      title: `Astraia`,
      description: 'Astraia worlds'
    },
    content: {
      title: 'Astraia'
    }
  },
  articles: {
    pathname: '/articles',
    meta: {
      title: 'Articles',
      description: 'Astraia articles'
    },
    content: { articleList: { label: 'Articles' } }
  },
  details: {
    pathname: '/articles/id',
    meta: {},
    content: {
      today: 'Today',
      author: 'Author',
      publication: 'Publication',
      id: { key: 'ID', defaultValue: '000' }
    }
  },
  latestArticle: {
    label: 'New article'
  },
  topArticles: {
    label: 'Popular articles'
  }
  // tagTitle: {
  //   key: 'title',
  //   h2: { pageTitle: 'page_title', artSubtitle: 'art_subtitle' },
  //   h3: {
  //     cardSmall: 'card_small',
  //     cardMedium: 'card_medium'
  //     // artSubtitle: "art_subtitle",
  //   }
  // },
  // tagParagraph: {
  //   key: 'paragraph',
  //   p: { artParagraph: 'art_paragraph', artDescription: 'art_description' }
  // }
};
