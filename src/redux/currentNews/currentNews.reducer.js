import {CurrentNewsActionTypes} from './currentNews.types';

const INITIAL_STATE = {
    newsListData: null
}

const currentNewsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CurrentNewsActionTypes.CURRENT_NEWS:
            console.log('hello')
            return {
                ...state,
                newsListData: action.payload
            }
        default:
            return state;
    }
}

export default currentNewsReducer;