import { ReactNode } from 'react';
import { Metadata } from 'next';

export type ChildrenProps = { children: ReactNode };

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

export type ParamsProps = {
  params: { id: string };
};

export type GenMetadata = ({
  params: { id }
}: ParamsProps) => Promise<Metadata>;
