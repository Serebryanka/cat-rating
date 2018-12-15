import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
});

class HomePage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Button component={Link} to="/cats" variant="contained" color="primary" className={classes.button}>
        Cats Go!
      </Button>
    );
  }
};


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
