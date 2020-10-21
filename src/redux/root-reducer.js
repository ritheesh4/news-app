import { combineReducers } from 'redux';
import homeReducer from './home/home.reducer'
import currentNewsReducer from './currentNews/currentNews.reducer';

export default combineReducers({
    news: homeReducer,
    currentNews: currentNewsReducer
});