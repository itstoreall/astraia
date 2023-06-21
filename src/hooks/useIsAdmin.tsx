import router from 'next/router';
import { useGlobalContext } from '@/context/GlobalContext';

const useIsAdmin = (pash: string) => {
  const { access } = useGlobalContext();

  console.log('useIsAdmin:', pash);

  if (!access) router.push(pash);
};

export default useIsAdmin;
