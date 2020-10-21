import {BookmarksActionTypes} from './bookmarks.actions';

const INITIAL_STATE = {
    bookmarksList: null
}

const bookmarksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookmarksActionTypes.BOOKMARK_ITEM:
            return {
                ...state,
                newsListData: action.payload
            }
        default:
            return state;
    }
}

export default bookmarksReducer;