import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchItems = createSelector(
    [selectSearch],
    search => search.searchItems
);

export const selectLastSearch = createSelector(
    [selectSearch],
    search => search.lastSearch
)

export const selectUserLocation = createSelector(
    [selectSearch],
    search => search.userLocation
)

export const selectIsLocationFetching = createSelector(
    [selectSearch],
    search => search.isFetching
  );
  
  export const selectIsLocationLoaded = createSelector(
    [selectSearch],
    search => !!search.userLocation
  );