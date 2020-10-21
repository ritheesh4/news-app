import { BookmarksActionTypes } from './bookmarks.types';

export const bookMarkItem = item => ({
    type: BookmarksActionTypes.BOOKMARK_ITEM,
    payload: item
})