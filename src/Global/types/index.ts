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
  // PUBLISH = 'publish',
  ARTICLES = 'articles',
  ARTICLE = 'article'
}

export enum EAuth {
  OWNER = 'owner',
  ADMIN = 'admin',
  EDITOR = 'editor'
}

// ------ G:

export type GAuth = {
  status: EAuth | null;
  set: (v: EAuth | null) => void;
  isOwner: boolean;
  isAdmin: boolean;
};

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
  content: string;
  setContent: (s: string) => void;
};

// ------ Params:

export type ContextParams = {
  auth: GAuth;
  admin: GAdmin;
  app: GApp;
  data: GData;
  details: GDetails;
  modal: GModal;
};
