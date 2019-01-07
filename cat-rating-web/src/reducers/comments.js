import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_FAIL,
} from "../actions/comments";

const initialState = {
  items: [],
  fetching: false,
  fetchErr: null,
  appending: false,
  appendErr: null,
};

const commentToItem = comment => ({
  ...comment,
  removing: false,
});

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST: {
      return {
        ...state,
        fetching: true,
        fetchErr: null,
      };
    }
    case FETCH_COMMENTS_SUCCESS: {
      const {items} = action.payload;
      return {
        ...state,
        items: items.map(commentToItem),
        fetching: false,
        fetchErr: null,
      };
    }
    case FETCH_COMMENTS_FAIL: {
      const {err} = action.payload;
      return {
        ...state,
        items: [],
        fetching: false,
        fetchErr: err,
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        appending: true,
        appendErr: null,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const { item } = action.payload;
      return {
        ...state,
        items: [...state.items, commentToItem(item)],
        appending: false,
        appendErr: null,
      };
    }
    case ADD_COMMENT_FAIL: {
      const {err} = action.payload;
      return {
        ...state,
        appending: false,
        appendErr: err,
      };
    }
    case REMOVE_COMMENT_REQUEST: {
      const {id} = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === id ? {
            ...item,
            removing: true,
          } : item;
        }),
      };
    }
    case REMOVE_COMMENT_SUCCESS: {
      const {id} = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    }
    case REMOVE_COMMENT_FAIL: {
      const {id, err} = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === id ? {
            ...item,
            removing: false,
            //removeErr: err,
          } : item;
        }),
      };
    }
    default:
      return state;
  }
}
