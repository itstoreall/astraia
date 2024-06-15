import { Metadata } from 'next';
import * as gc from '@/config/global';
import metadataHandler from '@/utils/metadataHandler';
import Articles from '@/components/Pages/Articles';

const { pathname } = gc.page.home;

export const metadata: Metadata = metadataHandler(pathname);

const HomePage = () => <Articles />;

export default HomePage;
