import { ChildrenProps } from '@/types';

export type KeyHandlerProps = { setIsAdmin: (b: boolean) => void };

export type GuardProps = ChildrenProps & {
  isAdmin: boolean;
  setIsAdmin: (b: boolean) => void;
};

export type EditorProps = {
  status: string;
  handleStatus: (s: string) => void;
};
