import { IArticle } from '@/interfaces';

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
      url: `https://astraia.storeall.com.ua/articles/${article?.id}`,
      image:
        'https://res.cloudinary.com/astraia/image/upload/v1688405354/astraia_uploads/900450_yonh65.jpg',
      // 'https://res.cloudinary.com/astraia/image/upload/v1688401749/astraia_uploads/space_uyhfig.jpg',
    },
  };
};

export default setMeta;
