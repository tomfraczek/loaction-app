import SearchActionTypes from './search.types';

export const addSearch = item => ({
    type: SearchActionTypes.ADD_SEARCH,
    payload: item
})

export const addLastSearch = item => ({
    type: SearchActionTypes.ADD_LAST_SEARCH,
    payload: item
})

export const fetchLocationStart = () => ({
    type: SearchActionTypes.FETCH_LOCATION_START
});
  
export const fetchLocationSuccess = item => ({
    type: SearchActionTypes.FETCH_LOCATION_SUCCESS,
    payload: item
});
  
export const fetchLocationFailure = errorMessage => ({
    type: SearchActionTypes.FETCH_LOCATION_FAILURE,
    payload: errorMessage
});

export const fetchLocationStartAsync = (url) => {
    return dispatch => {
        dispatch(fetchLocationStart());

        fetch(url)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            dispatch(fetchLocationSuccess(resp));
        })
        .catch(error => dispatch(fetchLocationFailure(error.message)));
    };
  };