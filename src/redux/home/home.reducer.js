import { HomeActionTypes } from './home.types';

const INITIAL_STATE = {
    newsListData: null
}

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HomeActionTypes.SET_NEWS:
            return {
                ...state,
                newsList: action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;