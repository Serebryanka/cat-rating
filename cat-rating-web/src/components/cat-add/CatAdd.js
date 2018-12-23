import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({

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
    return (
      <div>
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
          variant="contained"
          color="secondary"
          onClick={this.handleButtonClick}
        >
          Add Kotik
        </Button>
      </div>
    );
  }
}

CatAdd.propTypes = {
	classes: PropTypes.object.isRequired,
	onAdd: PropTypes.func.isRequired,
}

export default withStyles(styles)(CatAdd);
