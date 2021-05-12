import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchLocationStartAsync } from './redux/search/search.actions';
import HomepageContainer from './pages/homepage/homepage.container'

import './App.scss';

const App = ({ fetchLocationStartAsync }) => {
  const [url] = useState('http://api.ipstack.com/check?access_key=c8d7e3e54d35e4d10c7aa542bfe21c07')

  useEffect(() => {
    fetchLocationStartAsync(url);
  }, [fetchLocationStartAsync])
    
  return(
    <Switch>
      <Route exact path='/' component={HomepageContainer} />
    </Switch>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchLocationStartAsync: url => dispatch(fetchLocationStartAsync(url))
});

export default connect(null, mapDispatchToProps)(App);
