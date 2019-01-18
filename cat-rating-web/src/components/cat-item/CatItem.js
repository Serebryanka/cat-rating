import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Link} from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
  },
  input: {
    display: 'none',
  },
  avatar: {
    marginRight: theme.spacing.unit * 2,
  },
  text: {
    marginBottom: 0,
  },
});

class CatItem extends Component {
	handleDeleteClick = () => {
		const {cat, onDelete} = this.props;
		onDelete(cat.id);
	};
	handleChange = () => {
	  //event.target.checked;
		const {cat, onLikeChanged} = this.props;
		onLikeChanged(cat.id, !cat.like);
  };
	render() {
		const {classes, cat, removing, updating} = this.props;
		return (
			<ListItem key={cat.id} button>
        <Link
          to={`/cat/${cat.id}`}
          className={classes.avatar}
        >
          <Avatar alt={cat.name} src={cat.icon} />
        </Link>
				<Typography className={classes.text} variant="title" color="error" gutterBottom>
					{cat.name}
				</Typography>
				<IconButton
					className={classes.button}
					aria-label="Delete"
					onClick={this.handleDeleteClick}
				>
        {
          removing ? (<CircularProgress color="secondary" />) : (<DeleteIcon />)
        }
				</IconButton>
				<FormControlLabel
          control={
            <Switch
              checked={cat.like}
              onChange={this.handleChange}
              value="like"
              disabled={updating}
            />
          }
          label={cat.like ? 'Like' : 'Dislike'}
        />
			</ListItem>
		);
	}
}

CatItem.propTypes = {
	classes: PropTypes.object.isRequired,
	cat: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		like: PropTypes.bool.isRequired,
	}).isRequired,
  removing: PropTypes.bool,
  updating: PropTypes.bool,
	onDelete: PropTypes.func.isRequired,
	onLikeChanged: PropTypes.func.isRequired,
}

CatItem.defaultProps = {
  removing: false,
  updating: false,
}

export default withStyles(styles)(CatItem);
