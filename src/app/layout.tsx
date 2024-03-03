import type { Metadata } from 'next';
import { Open_Sans, Prompt, Share_Tech } from 'next/font/google';
import { ChildrenProps } from '@/types';
import '../styles/globals.scss';
import Header from '@/components/Header';

const prompt = Prompt({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300'],
  variable: '--font-prompt'
});

const shareTech = Share_Tech({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech'
});

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: 'ASTRAIA',
  description: 'Astraia - духовное саморазвитие'
};

const fonts = `${prompt.variable} ${shareTech.variable} ${openSans.variable}`;

const RootLayout = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <html lang='en'>
      <body className={fonts}>{children}</body>
    </html>
  );
};

export default RootLayout;
