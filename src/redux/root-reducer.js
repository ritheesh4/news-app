import { combineReducers } from 'redux';
import homeReducer from './home/home.reducer'
import currentNewsReducer from './currentNews/currentNews.reducer';
import bookmarksReducer from './bookmarks/bookmarks.reducer';

export default combineReducers({
    news: homeReducer,
    currentNews: currentNewsReducer,
    bookmarks: bookmarksReducer
});