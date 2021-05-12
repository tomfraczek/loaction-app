import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsLocationFetching } from '../../redux/search/search.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Homepage from './homepage.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLocationFetching
});

const HomepageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Homepage);

export default HomepageContainer;
