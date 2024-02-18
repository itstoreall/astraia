import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import { ChildrenProps } from '@/types';
import '../styles/globals.scss';

const logoFont = Prompt({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300'],
  variable: '--font-astraia-logo'
});

export const metadata: Metadata = {
  title: 'ASTRAIA',
  description: 'Astraia - духовное саморазвитие'
};

const RootLayout = ({ children }: Readonly<ChildrenProps>) => (
  <html lang='en'>
    <body className={`${logoFont.variable}`}>{children}</body>
  </html>
);

export default RootLayout;
