import {BookmarksActionTypes} from './bookmarks.types';

export const bookMarkItem = bookMark => ({
    type: BookmarksActionTypes.BOOKMARK_ITEM,
    payload: bookMark
})