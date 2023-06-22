import { IAddArticleContext } from '@/interfaces';
import { createContext, useContext } from 'react';

export const AddArticleContext = createContext<IAddArticleContext>({
  isArticle: false,
  setIsArticle: () => false,
  imageData: '',
  setImageData: () => '',
  title: '',
  setTitle: () => '',
  description: '',
  setDescription: () => '',
  author: '',
  setAuthor: () => '',
  textareaValue: '',
  setTextareaValue: () => '',
  editIndex: null,
  setEditIndex: () => 0,
  isDisplayArticle: false,
  setIsDisplayArticle: () => false,
  articleElements: [],
  setArticleElements: () => {},
  handleSubmit: () => {},
});

export const useAddArticleContext = () => useContext(AddArticleContext);
