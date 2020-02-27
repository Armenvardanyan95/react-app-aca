import React, { useReducer } from 'react';
import { FinancesStoreContext } from './store/finances-store.context';
import { reducer } from './store/reducers';
import { Summary } from './components/Summary';
import { Expense } from './components/Expense';
import { Category } from './components/Category';

const initialState = {
    categories: [],
    expenses: [],
}

export function Finances() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <FinancesStoreContext.Provider value={{state, dispatch}}>
            <Summary/>
            <Expense/>
            <Category/>
        </FinancesStoreContext.Provider>
    );
}
