// const meta = {
//   home: {
//     tilte: 'Astraia',
//     description:
//       'Cайт о духовном саморазвитии. Здесь вы найдете вдохновение, практические советы и ресурсы, которые помогут вам на пути к гармонии, радости и духовному саморазвитию',
//     url: 'https://astraia.storeall.com.ua/',
//     image: 'https://astraia.storeall.com.ua/space.jpg',
//   },
//   about: {
//     tilte: 'О нас',
//     description: 'Информация об авторах статей',
//     url: 'https://astraia.storeall.com.ua/about',
//     image: 'https://astraia.storeall.com.ua/space.jpg',
//   },
//   contacts: {
//     tilte: 'Контакты',
//     description: 'Контактная информация',
//     url: 'https://astraia.storeall.com.ua/contacts',
//     image: 'https://astraia.storeall.com.ua/space.jpg',
//   },
//   articles: {
//     tilte: 'Статьи',
//     description: 'Статьи о духовном саморазвитии',
//     url: 'https://astraia.storeall.com.ua/articles',
//     image: 'https://astraia.storeall.com.ua/space.jpg',
//   },
// };

import { IArticle } from '@/interfaces';

// export default meta;

// /*
const setMeta = (article?: IArticle) => {
  return {
    home: {
      tilte: 'Astraia',
      description:
        'Cайт о духовном саморазвитии. Здесь вы найдете вдохновение, практические советы и ресурсы, которые помогут вам на пути к гармонии, радости и духовному саморазвитию',
      url: 'https://astraia.storeall.com.ua/',
      image: 'https://astraia.storeall.com.ua/space.jpg',
    },
    about: {
      tilte: 'О нас',
      description: 'Информация об авторах статей',
      url: 'https://astraia.storeall.com.ua/about',
      image: 'https://astraia.storeall.com.ua/space.jpg',
    },
    contacts: {
      tilte: 'Контакты',
      description: 'Контактная информация',
      url: 'https://astraia.storeall.com.ua/contacts',
      image: 'https://astraia.storeall.com.ua/space.jpg',
    },
    articles: {
      tilte: 'Статьи',
      description: 'Статьи о духовном саморазвитии',
      url: 'https://astraia.storeall.com.ua/articles',
      image: 'https://astraia.storeall.com.ua/space.jpg',
    },
    id: {
      tilte: article?.title,
      description: article?.description,
      url: `https://astraia.storeall.com.ua`,
      image: `https://astraia.storeall.com.ua/${article?.image}`,
    },
  };
};

export default setMeta;
// */
