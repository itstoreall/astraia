'use client';
import { createContext, useState } from 'react';
import { ContextParams, EStatus, Article } from '../types';
import { ChildrenProps } from '@/types';

export const Context = createContext<ContextParams>({
  admin: {
    is: false,
    set: () => console.log()
  },
  app: {
    status: '',
    set: () => console.log(),
    isGuard: true,
    isInit: true,
    isCreate: false,
    isEdit: false,
    isPending: false,
    isActive: false,
    isDelete: false,
    config: EStatus
  },
  data: {
    articles: [],
    set: () => console.log()
  }
});

const GlobalState = ({ children }: ChildrenProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState<string>(EStatus.GUARD);
  const [articles, setArticles] = useState<Article[] | null>(null);

  const admin = {
    is: isAdmin,
    set: (b: boolean) => setIsAdmin(b)
  };

  const app = {
    status,
    set: (s: string) => setStatus(s),
    isGuard: status === EStatus.GUARD,
    isInit: status === EStatus.INIT,
    isCreate: status === EStatus.CREATE,
    isEdit: status === EStatus.EDIT,
    isPending: status === EStatus.PENDING,
    isActive: status === EStatus.ACTIVE,
    isDelete: status === EStatus.DELETE,
    config: EStatus
  };

  const data = {
    articles: articles,
    set: (d: Article[] | null) => setArticles(d)
  };

  const value = { admin, app, data };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default GlobalState;
