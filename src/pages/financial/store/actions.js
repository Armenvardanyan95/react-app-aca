export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export function addCategory(payload) {
    return ({type: ADD_CATEGORY, payload});
}

export function addExpense(payload) {
    return ({type: ADD_EXPENSE, payload});
}
