import * as actions from './auth-action-types';

import axiosAuth from '../../../Adapters/axios/axios-auth';

import message from '../../../data/data-auth';

const authSuccessMessage = message.authSuccessMessage;

const authentication_start = () => {
    return {
        type: actions.AUTHENTICATION_START
    };
};

const authentication_success = (returnedToken) => {
    return {
        type: actions.AUTHENTICATION_SUCCESS,
        token: returnedToken
    };
};

const authentication_error = (returnedError) => {
    return {
        type: actions.AUTHENTICATION_ERROR,
        error: returnedError
    };
};

export const authentication = (url, inputPackage) => {
    return dispatch => {
        dispatch(authentication_start());
        axiosAuth.post(url, inputPackage)
        .then(resp => {
            console.log(resp.data);
            dispatch(authentication_success(resp.data.idToken));
            alert(authSuccessMessage);
        })
        .catch(error => {
            console.log(error.message);
            dispatch(authentication_error(error));
            alert(`Untill I do a proper modal this will have to do... so there was a problem, and this problem is: ${error.message}`);
        });
    }
}
