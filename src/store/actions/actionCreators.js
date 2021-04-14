import * as actions from './action.types';
import axiosFetchDreams from '../../Adapters/axios/axios-fetch-dreams';
import repackingFetchedDreams from '../../helpers/repacking-fetched-dreams';

const dreams_fetching_start = () => {
    return {
        action: actions.DREAMS_FETCHING_START
    };
};

const dreams_fetching_success = (fetchedDreams) => {
    return {
        action: actions.DREAMS_FETCHING_SUCCESS,
        dreams: fetchedDreams
    };
};

const dreams_fetching_error = (error) => {
    return {
        action: actions.DREAMS_FETCHING_SUCCESS,
        dreams: error
    };
};

export const dreams_fetching = () => {
    return dispatch => {
        dispatch(dreams_fetching_start());
        axiosFetchDreams.get()
        .then ( response => {
            const dreamsArray = repackingFetchedDreams(response.data);
            dispatch(dreams_fetching_success(dreamsArray));
        })
        .catch (  error => dispatch(dreams_fetching_error(error)) )
    };
};
