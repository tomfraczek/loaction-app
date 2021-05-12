import SearchActionTypes from './search.types.js';

const INITIAL_STATE = {
    searchItems: [],
    userLocation: [],
    lastSearch: [],
    isFetching: false,
    errorMessage: undefined,
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SearchActionTypes.ADD_SEARCH:
            return{
                ...state,
                searchItems: [...state.searchItems, action.payload]
            }
        case SearchActionTypes.ADD_LAST_SEARCH:
            return{
                ...state,
                lastSearch: action.payload,
            }
        case SearchActionTypes.FETCH_LOCATION_START:
            return{
                ...state,
                isFetching: true,
            }
        case SearchActionTypes.FETCH_LOCATION_SUCCESS:
            return{
                ...state,
                isFetching: false,
                userLocation: action.payload,
            }
        case SearchActionTypes.FETCH_LOCATION_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}

export default searchReducer;