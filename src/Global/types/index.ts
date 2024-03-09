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
};

// ------ Global Context

export type ContextParams = {
  app: GApp;
  admin: GAdmin;
};
