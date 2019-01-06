import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { removeCat, setLike, fetchCats } from "../../actions/cats";
import { getFilteredAndSortedCats } from "../../selectors/cats";

import CatList from '../../components/cat-list';


class Container extends Component {
  // Overrides.
  componentWillMount() {
    this.props.onRequest()
  }
  render() {
    const {cats, loading, loadErr, onDelete, onLikeChanged} = this.props;
    return (
      <CatList
        cats={cats}
        loading={loading}
        loadErr={loadErr}
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
    removing: PropTypes.bool,
    updating: PropTypes.bool,
	})).isRequired,
  loading: PropTypes.bool.isRequired,
  loadErr: PropTypes.any.isRequired,
	onDelete: PropTypes.func.isRequired,
	onLikeChanged: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { searchFilter, sorting } = state;
  const cats = getFilteredAndSortedCats(state, sorting.sortField, searchFilter.value);
  return {
    cats,
    loading: state.cats.fetching,
    loadErr: state.cats.fetchErr,
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
  	onRequest: () => {
  		dispatch(fetchCats())
  	},
    onDelete: (id) => {
  		dispatch(removeCat(id))
  	},
    onLikeChanged: (id, like) => {
  		dispatch(setLike(id, like))
  	},
  })
)(Container);
