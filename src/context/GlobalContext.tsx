import { GlobalContent } from '@/interfaces';
import { createContext, useContext } from 'react';

export const GlobalContext = createContext<GlobalContent>({
  articles: [],
  setArticles: () => {},
  access: null,
  setAccess: () => null,
  themeMode: 'light',
  setThemeMode: () => 'light',
});

export const useGlobalContext = () => useContext(GlobalContext);
