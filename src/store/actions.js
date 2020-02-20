export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const REMOVE_ALL_BOOKMARKS = 'REMOVE_ALL_BOOKMARKS';

export function addBookmark(country) {
    return ({type: ADD_BOOKMARK, payload: country});
}

export function removeBookmark(code) {
    return ({type: REMOVE_BOOKMARK, payload: code});
}

export function removeAllBookmarks() {
    return ({type: REMOVE_ALL_BOOKMARKS});
}