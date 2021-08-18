import * as actions from './action-types';
import axiosFetchDreams from '../../../Adapters/axios/axios-fetch-dreams';
import repackingFetchedDreams from '../../../helpers/repacking-fetched-dreams';

const dreams_fetching_start = () => {
    return {
        type: actions.DREAMS_FETCHING_START
    };
};

const dreams_fetching_success = (fetchedDreams) => {
    return {
        type: actions.DREAMS_FETCHING_SUCCESS,
        dreams: fetchedDreams
    };
};

const dreams_fetching_error = (receivedError) => {
    return {
        type: actions.DREAMS_FETCHING_ERROR,
        error: receivedError
    };
};

export const dreams_fetching = () => {
    return dispatch => {
        dispatch(dreams_fetching_start());
        axiosFetchDreams.get()
        .then ( response => {
            const tertiaryDreamArray = repackingFetchedDreams(response.data);
            dispatch(dreams_fetching_success(tertiaryDreamArray));
        })
        .catch (  error => dispatch(dreams_fetching_error(error.message)) )
    };
};

export const make_dream_active = (sentDreamID) => {
    return {
        type: actions.MAKE_DREAM_ACTIVE,
        dreamID: sentDreamID
    };
};
