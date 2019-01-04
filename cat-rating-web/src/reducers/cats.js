import {
  ADD_CAT_REQUEST,
  ADD_CAT_SUCCESS,
  ADD_CAT_FAIL,
  REMOVE_CAT,
  SET_LIKE,
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAIL,
} from "../actions/cats";


const initialState = {
  items: [],
  fetching: false,
  fetchErr: null,
  appending: false,
  appendErr: null,
  removing: false,
  removeErr: null,
  updating: false,
  updateErr: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATS_REQUEST: {
      return {
        ...state,
        fetching: true,
        fetchErr: null,
      };
    }
    case FETCH_CATS_SUCCESS: {
      const {items} = action.payload;
      return {
        ...state,
        items,
        fetching: false,
        fetchErr: null,
      };
    }
    case FETCH_CATS_FAIL: {
      const {err} = action.payload;
      return {
        ...state,
        items: [],
        fetching: false,
        fetchErr: err,
      };
    }
    case ADD_CAT_REQUEST: {
      return {
        ...state,
        appending: true,
        appendErr: null,
      };
    }
    case ADD_CAT_SUCCESS: {
      const { item } = action.payload;
      return {
        ...state,
        items: [...state.items, item],
        appending: false,
        appendErr: null,
      };
    }
    case ADD_CAT_FAIL: {
      const {err} = action.payload;
      return {
        ...state,
        appending: false,
        appendErr: err,
      };
    }
    case REMOVE_CAT: {
      const {id} = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    }
    case SET_LIKE: {
      const {id, like} = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
  				return item.id === id ? {
  						...item,
  						like,
  					} : item;
          }),
      };
    }
    default:
      return state;
  }
}
