import { useContext } from 'react';
import { StoreContext } from '../App';

export function useStore() {
    return useContext(StoreContext);
}
