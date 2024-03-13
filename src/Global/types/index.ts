export type Article = {
  id: string;
  ipfs: string;
  title: string;
  description: string;
  author: string;
  text: string;
  image: string;
  tags: string[];
  views: string | null;
  timestamp: string;
};

export enum EStatus {
  GUARD = 'guard',
  INIT = 'init',
  CREATE = 'create',
  EDIT = 'edit',
  PENDING = 'pending',
  ACTIVE = 'active',
  DELETE = 'delete',
  ARTICLES = 'articles',
  ARTICLE = 'article'
}

// ------ G:

export type GAdmin = {
  is: boolean;
  set: (b: boolean) => void;
};

export type GApp = {
  status: string;
  set: (s: string) => void;
  isGuard: boolean;
  isInit: boolean;
  isCreate: boolean;
  isEdit: boolean;
  isPending: boolean;
  isActive: boolean;
  isDelete: boolean;
  isArticles: boolean;
  isArticle: boolean;
  config: typeof EStatus;
};

export type GData = {
  articles: Article[] | null;
  set: (d: Article[] | null) => void;
};

export type GDetails = {
  article: Article | null;
  set: (d: Article | null) => void;
};

export type GModal = {
  is: boolean;
  set: (b: boolean) => void;
};

// ------ Params:

export type ContextParams = {
  app: GApp;
  admin: GAdmin;
  data: GData;
  details: GDetails;
  modal: GModal;
};
