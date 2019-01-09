import React from 'react';
import CatView from '../../containers/cat-view';
import CommentList from '../../containers/comment-list';

/*const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});*/


const CatPage = ({ match }) => {

  return (
    <div>
      <CatView
        catID={match.params.id}
      />
      <CommentList
        catID={match.params.id}
      />
    </div>
  );
}

CatPage.propTypes = {

};

export default CatPage;
