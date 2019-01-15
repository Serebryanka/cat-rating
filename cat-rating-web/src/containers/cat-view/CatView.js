import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchCatByID } from "../../actions/cat";

import CatView from '../../components/cat-view';

class CatContainer extends Component {
  // Overrides.
  componentWillMount() {
    const { onRequest, catID } = this.props;
    onRequest(catID);
  }
  render() {
    const { cat, loading, loadErr } = this.props;
    return (
      <CatView
        cat={cat}
        loading={loading}
        loadErr={loadErr}
      />
    );
  }
}

CatContainer.propTypes = {
  cat: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		like: PropTypes.bool.isRequired,
	}).isRequired,
  loading: PropTypes.bool.isRequired,
  loadErr: PropTypes.any.isRequired,
	onDelete: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    cat: state.cat.data,
    loading: state.cat.fetching,
    loadErr: state.cat.fetchErr,
  };
};


export default connect(
  mapStateToProps,
  dispatch => ({
  	onRequest: (catID) => {
  		dispatch(fetchCatByID(catID))
  	},
  })
)(CatContainer);
