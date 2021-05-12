import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLastSearch, selectIsLocationLoaded, selectUserLocation } from '../../redux/search/search.selectors';

import SearchBox from '../../components/search-box/search-box.component';
import SearchHistory from '../../components/search-history/search-history.component';
import LocationOverview from '../../components/location-overview/location-overview.component';

import './homepage.styles.scss';

const Homepage = ({ lastSearch, userLocation }) => (
  <div className="homepage">
      <div className='side-bar'>
        <SearchHistory />
      </div>

      <div className='main-container'>
        <LocationOverview 
          title="User's Location:"
          data={userLocation} 
        />
        <SearchBox />
        <LocationOverview 
          title='Search Details:'
          data={lastSearch}
        />
      </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
  lastSearch: selectLastSearch,
  isLocationLoaded: selectIsLocationLoaded,
  userLocation: selectUserLocation,
})

export default connect(mapStateToProps)(Homepage);