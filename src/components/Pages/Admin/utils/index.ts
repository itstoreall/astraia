import * as config from '../config';

const { init, create } = config.dashboard.status;

export const isInit = (status: string) => status === init;
export const isCreate = (status: string) => status === create;

export const validateUrl = (url: string) => {
  if (url && url?.slice(0, 8).includes('https://')) {
    return url.slice(-5).includes('.webp') ||
      url.slice(-5).includes('.jpg') ||
      url.slice(-5).includes('.jpeg') ||
      url.slice(-5).includes('.png')
      ? url
      : '';
  } else return '';
};
