import { ReactNode } from 'react';

export interface IAccess {
  isAdmin: boolean;
  loading: boolean;
  token?: string | null;
}

export type GlobalContent = {
  articles: any[];
  setArticles: (articles: any[]) => void;
  access: IAccess | null;
  setAccess: (access: IAccess | null) => void;
  theme: string;
  setTheme: (theme: string) => void;
};

export interface IContainerProps {
  element: string;
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
