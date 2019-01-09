import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class CatView extends Component {

  render() {
    const {classes, cat} = this.props;
    return (
      <div>
      <Paper className={classes.root} elevation={1}>
        <Avatar alt={cat.name} src={cat.icon} />
        <Typography variant="h5" component="h3">
          {cat.name}
        </Typography>
      </Paper>
      </div>
    );
  }
}

CatView.propTypes = {
  classes: PropTypes.object.isRequired,
  cat: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		like: PropTypes.bool.isRequired,
	}).isRequired,
};

export default withStyles(styles)(CatView);
