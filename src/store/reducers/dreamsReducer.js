import * as actions from '../actions/action.types';

const initialState = {
    dreams: [],
    loading: false,
    error: null
};

const dreamsReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case actions.DREAMS_FETCHING_START:
            return {
                ...state,
                loading: true
            };
        case actions.DREAMS_FETCHING_SUCCESS:
            return {
                ...state,
                dreams: action.dreams,
                loading: false
            };
        case actions.DREAMS_FETCHING_ERROR:
            return {
                ...state,
                error: action.error
            };
    
        default:
            return state;
    };
};

export default dreamsReducer;
