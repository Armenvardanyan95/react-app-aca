import { ADD_CATEGORY, ADD_EXPENSE } from './actions';

export function categoriesReducer(state, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return [...state, action.payload];
        default:
            return state;
    }
}

export function expensesReducer(state, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return [...state, action.payload];
        default:
            return state;
    }
}

export function reducer(state, action) {
    return {
        categories: categoriesReducer(state.categories, action),
        expenses: expensesReducer(state.expenses, action),
    }
}
