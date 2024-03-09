import { Metadata } from 'next';
import metadataHandler from '@/utils/metadataHandler';
import * as gc from '@/config/global';
import Home from '@/components/Pages/Home';

const { pathname } = gc.page.home;

export const metadata: Metadata = metadataHandler(pathname);

const HomePage = () => <Home />;

export default HomePage;
