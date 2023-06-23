import router from 'next/router';
import { useGlobalContext } from '@/context/GlobalContext';

const useIsAdmin = (pash: string) => {
  const { access } = useGlobalContext();

  if (!access) router.push(pash);

  return { isAdmin: access ? access : false };
};

export default useIsAdmin;
