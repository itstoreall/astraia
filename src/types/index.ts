import { ReactNode } from 'react';
import { Metadata } from 'next';

export type ChildrenProps = { children: ReactNode };

export type ParamsProps = {
  params: { id: string };
};

export type GenMetadata = ({
  params: { id }
}: ParamsProps) => Promise<Metadata>;
