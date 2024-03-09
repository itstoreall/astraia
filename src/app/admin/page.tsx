import { Metadata } from 'next';
import metadataHandler from '@/utils/metadataHandler';
import * as gc from '@/config/global';
import Admin from '@/components/Pages/Admin';

const { pathname } = gc.page.admin;

export const metadata: Metadata = metadataHandler(pathname);

const AdminPage = () => <Admin />;

export default AdminPage;
