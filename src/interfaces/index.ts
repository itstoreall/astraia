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
  themeMode: string;
  setThemeMode: (theme: string) => void;
};

export interface IChld {
  children: ReactNode;
}
