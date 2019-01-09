import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchComments, removeComment } from "../../actions/comments";

import CommentList from '../../components/comment-list';


class Container extends Component {
  // Overrides.
  componentWillMount() {
    const { onRequest, catID } = this.props;
    onRequest(catID);
  }
  render() {
    const {comments, loading, loadErr, onDelete} = this.props;
    return (
      <CommentList
        comments={comments}
        loading={loading}
        loadErr={loadErr}
        onDelete={onDelete}
      />
    );
  }
}


Container.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		catID: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
    removing: PropTypes.bool,
	})).isRequired,
  loading: PropTypes.bool.isRequired,
  loadErr: PropTypes.any.isRequired,
	onDelete: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    comments: state.comments.items,
    loading: state.comments.fetching,
    loadErr: state.comments.fetchErr,
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
  	onRequest: (catID) => {
  		dispatch(fetchComments(catID))
  	},
    onDelete: (id) => {
  		dispatch(removeComment(id))
  	},
  })
)(Container);
