import type { Metadata } from 'next';
import { Open_Sans, Prompt, Share_Tech } from 'next/font/google';
import GlobalContext from '@/Global/context';
import { ChildrenProps } from '@/types';
import * as gc from '@/config/global';
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

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL(gc.meta.metadataBase),
  title: gc.meta.title,
  description: gc.meta.description,
  openGraph: {
    title: gc.meta.title,
    description: gc.meta.description,
    url: gc.meta.url,
    siteName: gc.meta.siteName,
    images: [gc.meta.defaultImage],
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: gc.meta.title,
    description: gc.meta.description,
    images: [gc.meta.defaultImage]
  }
};

const fonts = `${prompt.variable} ${shareTech.variable} ${openSans.variable}`;

const RootLayout = ({ children }: Readonly<ChildrenProps>) => {
  return (
    <html lang='ru'>
      <body className={fonts}>
        <GlobalContext>{children}</GlobalContext>
      </body>
    </html>
  );
};

export default RootLayout;
