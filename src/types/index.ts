import { ReactNode } from 'react';

export type ChildrenProps = { children: ReactNode };

export type Article = {
  id: string;
  ipfs: string;
  title: string;
  description: string;
  author: string;
  text: string;
  tags: string[];
  views: string | null;
  timestamp: string;
};
