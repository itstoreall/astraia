import { Dispatch, FormEvent, ReactNode, SetStateAction } from 'react';

export interface IAccess {
  isAdmin: boolean;
  loading: boolean;
  token?: string | null;
}

export interface IArticle {
  id: string;
  title: string;
  description: string;
  text: string;
  author: string;
  image: string;
  views: string | null;
  tags: string[];
}

export type GlobalContent = {
  articles: any[];
  setArticles: (articles: any[]) => void;
  access: IAccess | null;
  setAccess: (access: IAccess | null) => void;
  theme: string;
  setTheme: (theme: string) => void;
  isLoading: boolean;
  setIsLoading: (b: boolean) => void;
};

export interface IContainerProps {
  parent: string;
  children: ReactNode;
}

export interface IChld {
  children: ReactNode;
}

// ----------------- Themes

// export interface ITheme {
//   background: string;
//   backgroundBlur: string;
//   backgroundHover: string;
//   secondaryBackground: string;
//   contrastBackground: string;
//   contrastBackgroundHover: string;
//   text: string;
//   textInvert: string;
//   button: string;
//   buttonHover: string;
// }

// ----------------- Article Handler

export interface IArticleHandler {
  article?: IArticle | null;
  label: string;
}

export interface IArticleElement {
  name: string;
  text: string;
}

export interface IAddArticleContext {
  isArticle: boolean;
  setIsArticle: (b: boolean) => void;
  imageData: string;
  setImageData: (s: string) => void;
  title: string;
  setTitle: (s: string) => void;
  description: string;
  setDescription: (s: string) => void;
  author: string;
  setAuthor: (s: string) => void;
  textareaValue: string;
  setTextareaValue: (s: string) => void;
  editIndex: number | null;
  setEditIndex: (n: number | null) => void;
  isDisplayArticle: boolean;
  setIsDisplayArticle: (b: boolean) => void;
  isPreview: boolean;
  setIsPreview: (b: boolean) => void;
  articleElements: IArticleElement[];
  setArticleElements: Dispatch<SetStateAction<IArticleElement[]>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitError: string;
  setSubmitError: (s: string) => void;
}
