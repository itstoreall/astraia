import { ReactNode } from 'react';

export interface IAccess {
  token: string | null;
  loading: boolean;
  isAdmin: boolean;
}

export type GlobalContent = {
  articles: any[];
  setArticles: (articles: any[]) => void;
  access: IAccess | null;
  setAccess: (access: IAccess) => void;
  themeMode: string;
  setThemeMode: (theme: string) => void;
};

export interface IChld {
  children: ReactNode;
}
