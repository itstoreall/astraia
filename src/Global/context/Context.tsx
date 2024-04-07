'use client';
import { createContext, useState } from 'react';
import { ChildrenProps } from '@/types';
import * as t from '../types';

export const Context = createContext<t.ContextParams>({
  auth: {
    status: null,
    set: () => console.log(),
    isOwner: false,
    isAdmin: false
  },
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
    isArticles: false,
    isArticle: false,
    config: t.EStatus
  },
  data: {
    articles: [],
    set: () => console.log()
  },
  details: {
    article: null,
    set: () => console.log()
  },
  modal: {
    is: false,
    set: () => console,
    content: '',
    setContent: () => console
  }
});

const GlobalState = ({ children }: ChildrenProps) => {
  const [authorisation, setAuthorisation] = useState<t.EAuth | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState<string>(t.EStatus.GUARD);
  const [articles, setArticles] = useState<t.Article[] | null>(null);
  const [article, setArticle] = useState<t.Article | null>(null);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');

  const auth = {
    status: authorisation,
    set: (v: t.EAuth | null) => setAuthorisation(v),
    isOwner: authorisation === t.EAuth.OWNER,
    isAdmin: authorisation === t.EAuth.ADMIN
  };

  const admin = {
    is: isAdmin,
    set: (b: boolean) => setIsAdmin(b)
  };

  const app = {
    status,
    set: (s: string) => setStatus(s),
    isGuard: status === t.EStatus.GUARD,
    isInit: status === t.EStatus.INIT,
    isCreate: status === t.EStatus.CREATE,
    isEdit: status === t.EStatus.EDIT,
    isPending: status === t.EStatus.PENDING,
    isActive: status === t.EStatus.ACTIVE,
    isDelete: status === t.EStatus.DELETE,
    isArticles: status === t.EStatus.ARTICLES,
    isArticle: status === t.EStatus.ARTICLE,
    config: t.EStatus
  };

  const data = {
    articles: articles,
    set: (d: t.Article[] | null) => setArticles(d)
  };

  const details = {
    article: article,
    set: (d: t.Article | null) => setArticle(d)
  };

  const modal = {
    is: isModal,
    set: (b: boolean) => setIsModal(b),
    content: modalContent,
    setContent: (s: string) => setModalContent(s)
  };

  const value = { auth, admin, app, data, details, modal };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default GlobalState;
