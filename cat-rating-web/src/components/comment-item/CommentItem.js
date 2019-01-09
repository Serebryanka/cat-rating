import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
});

class CommentItem extends Component {

  handleDeleteClick = () => {
		const {comment, onDelete} = this.props;
		onDelete(comment.id);
	};

  render() {
    const { classes, comment, removing } = this.props;
		return (
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={comment.text}
        />
        <IconButton
					className={classes.button}
					aria-label="Delete"
					onClick={this.handleDeleteClick}
				>
        {
          removing ? (<CircularProgress color="secondary" />) : (<DeleteIcon />)
        }
				</IconButton>
      </ListItem>
    );
  }
}

CommentItem.propTypes = {
  classes: PropTypes.object.isRequired,
	comment: PropTypes.shape({
		id: PropTypes.string.isRequired,
		catID: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired,
  removing: PropTypes.bool,
	onDelete: PropTypes.func.isRequired,
};

CommentItem.defaultProps = {
  removing: false,
}

export default withStyles(styles)(CommentItem);
