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
  INIT = 'init',
  CREATE = 'create',
  EDIT = 'edit',
  PENDING = 'pending',
  ACTIVE = 'active',
  DELETE = 'delete'
}

// ------ G:

export type GAdmin = {
  is: boolean;
  set: (b: boolean) => void;
};

export type GApp = {
  status: string;
  set: (s: string) => void;
  isInit: boolean;
  isCreate: boolean;
  isEdit: boolean;
  isPending: boolean;
  isActive: boolean;
  isDelete: boolean;
  config: typeof EStatus;
};

export type GData = {
  articles: Article[] | null;
  set: (d: Article[] | null) => void;
};

// ------ Params:

export type ContextParams = {
  app: GApp;
  admin: GAdmin;
  data: GData;
};
