'use client';
import { createContext, useState } from 'react';
import { ContextParams } from '../types';
import { ChildrenProps } from '@/types';
import * as c from '../config';

export const Context = createContext<ContextParams>({
  admin: {
    is: false,
    set: () => console.log()
  },
  app: {
    status: '',
    set: () => console.log(),
    isInit: true,
    isCreate: false,
    isEdit: false,
    isPending: false,
    isActive: false,
    isDelete: false
  }
});

const GlobalState = ({ children }: ChildrenProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState<string>('init');

  const admin = {
    is: isAdmin,
    set: (b: boolean) => setIsAdmin(b)
  };

  const app = {
    status,
    set: (s: string) => setStatus(s),
    isInit: status === c.status.init,
    isCreate: status === c.status.create,
    isEdit: status === c.status.edit,
    isPending: status === c.status.pending,
    isActive: status === c.status.active,
    isDelete: status === c.status.delete
  };

  const value = { app, admin };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default GlobalState;
