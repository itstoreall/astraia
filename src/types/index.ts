import { ReactElement, ReactNode } from 'react';

export type Button = (props: {
  type?: 'button' | 'submit' | 'reset';
  fn?: () => void;
  style?: { [key: string]: string | number };
  hover?: { [key: string]: string | number };
  disabled?: boolean;
  children: ReactNode;
}) => ReactElement;
