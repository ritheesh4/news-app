import {CurrentNewsActionTypes} from './currentNews.types';

const INITIAL_STATE = {
    newsListData: "hello"
}

const currentNewsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CurrentNewsActionTypes.CURRENT_NEWS:
            return {
                ...state,
                newsListData: action.payload
            }
        default:
            return state;
    }
}

export default currentNewsReducer;