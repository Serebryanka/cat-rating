import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CatView from '../../containers/cat-view';
import CommentList from '../../containers/comment-list';
import CommentAdd from '../../containers/comment-add';

const styles = theme => ({
  root: {
    background: '#4bdd97',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const CatPage = ({ match, classes }) => {

  return (
    <div className={classes.root} >
      <CatView
        catID={match.params.id}
      />
      <CommentList
        catID={match.params.id}
      />
      <CommentAdd
        catID={match.params.id}
      />
    </div>
  );
}

CatPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CatPage);
