import { BookmarksActionTypes } from './bookmarks.types';

const INITIAL_STATE = [
    { bookmarksList: null }
]

const bookmarksReducer = (list = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookmarksActionTypes.BOOKMARK_ITEM:
            const bookMarkIndex = list.findIndex(
                (eachObj) => eachObj.title === action.payload[0].title
            );
            if (bookMarkIndex) {
                list.splice(bookMarkIndex, 1);
            } else {
                list.push(...action.payload);
            }
            return {
                bookmarksList: list
            }
        default:
            return list;
    }
}

export default bookmarksReducer;