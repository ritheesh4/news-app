import { BookmarksActionTypes } from './bookmarks.types';

const INITIAL_STATE = [
    // { bookmarksList: null }
]

const bookmarksReducer = (list = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookmarksActionTypes.BOOKMARK_ITEM:
            const bookMarkIndex = list.findIndex(
                (eachObj) => eachObj.title === action.payload.title
            );
            if (bookMarkIndex > -1) {
                // list.splice(bookMarkIndex, 1);
                return list.filter(item=> item.title !== action.payload.title);

            } else {
                list.push(action.payload);
                return list;
            }

        default:
            return list;
    }
}

export default bookmarksReducer;