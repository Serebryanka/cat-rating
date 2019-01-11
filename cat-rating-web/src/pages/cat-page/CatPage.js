import React from 'react';
import '../../App.css';
import { withStyles } from '@material-ui/core/styles';
import CatView from '../../containers/cat-view';
import CommentList from '../../containers/comment-list';
import CommentAdd from '../../containers/comment-add';

const styles = theme => ({

});


const CatPage = ({ match, classes }) => {

  return (
    <div className="App-header">
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

};

export default withStyles(styles)(CatPage);
