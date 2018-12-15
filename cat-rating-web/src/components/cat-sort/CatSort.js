import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class CatSort extends Component {
  state = {
    sortname: '',
  };
  handleChange = event => {
    const {onSortChange} = this.props;
    this.setState({
      sortname: event.target.value,
    })
    onSortChange(event.target.value);
  };
  render() {
    const {classes} = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sort-simple">Sort by</InputLabel>
        <Select
          value={this.state.sortname}
          onChange={this.handleChange}
          inputProps={{
            id: 'sort-simple',
          }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Name'}>Name</MenuItem>
          <MenuItem value={'Like'}>Like</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

CatSort.propTypes = {
	classes: PropTypes.object.isRequired,
  onSortChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(CatSort);
