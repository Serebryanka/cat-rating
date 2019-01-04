import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  div: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    height: '50px',
    marginLeft: '10px',
  },
});

class CatAdd extends Component {
  state = {
		icon: "Tefteli",
		name: "Gribochki",
  }
  handleIconChange = event => {
    this.setState({
      icon: event.target.value,
    });
  };
	handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };
  handleButtonClick = () => {
    const {icon, name} = this.state;
    const {onAdd} = this.props;
		onAdd({
      icon: icon,
      name: name,
      like: true,
    });
	};
	render() {
    const {icon, name} = this.state;
    const {classes, appending, appendErr} = this.props;
    if (appendErr) {
      alert("The error occured! Cat wasn't added!");
    }
    return (
      <div
        className={classes.div}
      >
        <TextField
          id="outlined-icon"
          label="Icon"
          value={icon}
          onChange={this.handleIconChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={this.handleNameChange}
          margin="normal"
          variant="outlined"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={this.handleButtonClick}
          disabled={appending}
        >
        {
          appending ? (<CircularProgress color="secondary" />) : "Add Kotik"
        }
        </Button>
      </div>
    );
  }
}

CatAdd.propTypes = {
	classes: PropTypes.object.isRequired,
  appending: PropTypes.bool,
  appendErr: PropTypes.any,
	onAdd: PropTypes.func.isRequired,
}

CatAdd.defaultProps = {
  appending: false,
  appendErr: null,
}

export default withStyles(styles)(CatAdd);
