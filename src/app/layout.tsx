import type { Metadata } from 'next';
import {
  Bebas_Neue,
  Fjalla_One,
  Inter,
  Prompt,
  Share_Tech,
  Share_Tech_Mono
} from 'next/font/google';
import { ChildrenProps } from '@/types';
import '../styles/globals.scss';

const logoFont = Prompt({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300'],
  variable: '--font-astraia-logo'
});

export const metadata: Metadata = { title: 'IT', description: 'itstoreall UA' };

const RootLayout = ({ children }: Readonly<ChildrenProps>) => (
  <html lang='en'>
    <body className={`${logoFont.variable}`}>{children}</body>
  </html>
);

export default RootLayout;
