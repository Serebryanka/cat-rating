import {
  list as listCommentsApi,
  create as createCommentApi,
  remove as removeCommentApi,
} from '../api/comments';

export const FETCH_COMMENTS_REQUEST = "cats/FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "cats/FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAIL = "cats/FETCH_COMMENTS_FAIL";

export const ADD_COMMENT_REQUEST = "cats/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "cats/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAIL = "cats/ADD_COMMENT_FAIL";

export const REMOVE_COMMENT_REQUEST = "cats/REMOVE_COMMENT_REQUEST";
export const REMOVE_COMMENT_SUCCESS = "cats/REMOVE_COMMENT_SUCCESS";
export const REMOVE_COMMENT_FAIL = "cats/REMOVE_COMMENT_FAIL";

const fetchCommentsRequest = () => ({
  type: FETCH_COMMENTS_REQUEST,
})

const fetchCommentsSuccess = items => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: {
    items,
  },
})

const fetchCommentsFail = err => ({
  type: FETCH_COMMENTS_FAIL,
  payload: {
    err,
  },
})

export const fetchComments = (catID) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCommentsRequest());
      const comments = await listCommentsApi(catID);
      dispatch(fetchCommentsSuccess(comments));
    } catch (err) {
      console.log(err);
      dispatch(fetchCommentsFail(err));
    }
  };
};

const addCommentRequest = () => ({
  type: ADD_COMMENT_REQUEST,
})

const addCommentSuccess = item => ({
  type: ADD_COMMENT_SUCCESS,
  payload: {
    item,
  },
})

const addCommentFail = err => ({
  type: ADD_COMMENT_FAIL,
  payload: {
    err,
  },
})

export const addComment = item => {
  return async (dispatch) => {
    try {
      dispatch(addCommentRequest());
      const comment = await createCommentApi(item);
      dispatch(addCommentSuccess(comment));
    } catch (err) {
      console.log(err);
      dispatch(addCommentFail(err));
    }
  };
};

const removeCommentRequest = id => ({
  type: REMOVE_COMMENT_REQUEST,
  payload: {
    id,
  }
})

const removeCommentSuccess = id => ({
  type: REMOVE_COMMENT_SUCCESS,
  payload: {
    id,
  },
})

const removeCommentFail = (id, err) => ({
  type: REMOVE_COMMENT_FAIL,
  payload: {
    id,
    err,
  },
})

export const removeComment = id => {
  return async (dispatch) => {
    try {
      dispatch(removeCommentRequest(id));
      await removeCommentApi(id);
      dispatch(removeCommentSuccess(id));
    } catch (err) {
      console.log(err);
      dispatch(removeCommentFail(err));
    }
  };
};
