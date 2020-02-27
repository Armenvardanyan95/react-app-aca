import { useContext } from 'react';
import { FinancesStoreContext } from './finances-store.context';

export function useFinancesStore() {
    return useContext(FinancesStoreContext);
}
