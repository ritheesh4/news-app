import {HomeActionTypes} from './home.types';

export const fetchNews = news => ({
    type: HomeActionTypes.SET_NEWS,
    payload: news
})