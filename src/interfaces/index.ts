import { ReactNode } from 'react';

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

export interface Theme {
  background: string;
  backgroundBlur: string;
  backgroundHover: string;
  secondaryBackground: string;
  contrastBackground: string;
  contrastBackgroundHover: string;
  text: string;
  textInvert: string;
  button: string;
  buttonHover: string;
}
