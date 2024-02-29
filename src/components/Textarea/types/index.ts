import { ReactElement } from 'react';

export type Textarea = (props: {
  text: string;
  handleText: (s: string) => void;
}) => ReactElement;
