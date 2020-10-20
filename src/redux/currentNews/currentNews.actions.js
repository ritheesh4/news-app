import {CurrentNewsActionTypes} from './currentNews.types';

export const currentNews = newsData => ({
    type: CurrentNewsActionTypes.CURRENT_NEWS,
    payload: newsData
})