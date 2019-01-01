import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { removeCat, toggleLike, fetchCats } from "../../actions/cats";
import { getFilteredAndSortedCats } from "../../selectors/cats";

import CatList from '../../components/cat-list';


class Container extends Component {
  // Overrides.
  componentWillMount() {
    this.props.onRequest()
  }
  render() {
    const {cats, onDelete, onLikeChanged} = this.props;
    return (
      <CatList
        cats={cats}
        onDelete={onDelete}
        onLikeChanged={onLikeChanged}
      />
    );
  }
}


Container.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		like: PropTypes.bool.isRequired,
	})).isRequired,
	onDelete: PropTypes.func.isRequired,
	onLikeChanged: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { searchFilter, sorting } = state;
  const cats = getFilteredAndSortedCats(state, sorting.sortField, searchFilter.value);
  return { cats };
};

export default connect(
  mapStateToProps,
  dispatch => ({
  	onRequest: () => {
  		dispatch(fetchCats())
  	},
    onDelete: removeCat,
    onLikeChanged: toggleLike,
  })
)(Container);
