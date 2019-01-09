import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import CommentItem from '../comment-item';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
});

const CommentList = ({classes, comments, loading, loadErr, onDelete}) => {
  if (loading) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }
  if (loadErr) {
    return (
      <div>
        <img alt="Ooops!" src="https://rlv.zcache.com/oops_tiger_rabbit_funny_t_shirt-ra185828f09034430b082f6d9e44b28b3_k2gl5_307.jpg?rvtype=content" />
      </div>
    );
  }
  return (
    <List className={classes.root} dense>
      {comments.map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
          removing={comment.removing}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		catID: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
    removing: PropTypes.bool,
	})).isRequired,
  loading: PropTypes.bool,
  loadErr: PropTypes.object,
	onDelete: PropTypes.func.isRequired,
}

CommentList.defaultProps = {
  loading: false,
  loadErr: null,
}

export default withStyles(styles)(CommentList);
