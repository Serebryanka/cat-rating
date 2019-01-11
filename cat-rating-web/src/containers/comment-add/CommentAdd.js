import { connect } from "react-redux";
import { addComment} from "../../actions/comments";

import CommentAdd from '../../components/comment-add';


const mapStateToProps = state => {
  return {
    appending: state.comments.appending,
    appendErr: state.comments.appendErr,
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
    onCommentAdd: (item) => {
      dispatch(addComment(item))
    },
  })
)(CommentAdd);
