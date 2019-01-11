import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    height: '50px',
    marginLeft: '10px',
  },
});

class CommentAdd extends Component {
  state = {
		text: "This is comment",
  }
  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  };
  handleButtonClick = () => {
    const {text} = this.state;
    const {onCommentAdd, catID} = this.props;
		onCommentAdd({
      catID,
      text,
    });
	};
	render() {
    const {text} = this.state;
    const {classes, appending, appendErr} = this.props;
    if (appendErr) {
      alert("The error occured! Cat wasn't added!");
    }
    return (
      <div
        className={classes.div}
      >
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          value={text}
          className={classes.textField}
          onChange={this.handleChange}
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
          appending ? (<CircularProgress color="secondary" />) : "Add Comment"
        }
        </Button>
      </div>
    );
  }
}

CommentAdd.propTypes = {
	classes: PropTypes.object.isRequired,
  appending: PropTypes.bool,
  appendErr: PropTypes.any,
	onCommentAdd: PropTypes.func.isRequired,
}

CommentAdd.defaultProps = {
  appending: false,
  appendErr: null,
}

export default withStyles(styles)(CommentAdd);
