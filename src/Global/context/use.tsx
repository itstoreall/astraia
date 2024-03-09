import { useContext } from 'react';
import { Context } from './Context';

export const useGlobalState = () => useContext(Context);
