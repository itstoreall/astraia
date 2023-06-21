import { IAddArticleContext } from '@/interfaces';
import { createContext, useContext } from 'react';

export const AddArticleContext = createContext<IAddArticleContext>({
  articleElements: [],
  setArticleElements: () => {},
});

export const useAddArticleContext = () => useContext(AddArticleContext);
