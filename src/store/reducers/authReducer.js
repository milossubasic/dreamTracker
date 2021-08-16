import * as actions from '../actions/auth-reducer-actions/auth-action-types';

const authInitialState = {
    token: '',
    isLogged: false,
    loading: false,
    error: null
};

const authReducer = ( state=authInitialState, action ) => {
    switch (action.type) {
        case actions.AUTHENTICATION_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actions.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                token: action.token,
                isLogged: true,
                loading: false,
                error: null
            };
        case actions.AUTHENTICATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
    
        default:
            return state;
    };   
};

export default authReducer;
