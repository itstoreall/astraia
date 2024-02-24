import type { Metadata } from 'next';
import { Prompt, Share_Tech } from 'next/font/google';
import { ChildrenProps } from '@/types';
import '../styles/globals.scss';

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

export const metadata: Metadata = {
  title: 'ASTRAIA',
  description: 'Astraia - духовное саморазвитие'
};

const RootLayout = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <html lang='en'>
      <body className={`${prompt.variable} ${shareTech.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
