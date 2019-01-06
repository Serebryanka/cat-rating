import {
  ADD_CAT_REQUEST,
  ADD_CAT_SUCCESS,
  ADD_CAT_FAIL,
  REMOVE_CAT_REQUEST,
  REMOVE_CAT_SUCCESS,
  REMOVE_CAT_FAIL,
  SET_LIKE_REQUEST,
  SET_LIKE_SUCCESS,
  SET_LIKE_FAIL,
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
};

const catToItem = cat => ({
  ...cat,
  removing: false,
  updating: false,
});

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
        items: items.map(catToItem),
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
        items: [...state.items, catToItem(item)],
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
    case REMOVE_CAT_REQUEST: {
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
    case REMOVE_CAT_SUCCESS: {
      const {id} = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    }
    case REMOVE_CAT_FAIL: {
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
    case SET_LIKE_REQUEST: {
      const {id} = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === id ? {
            ...item,
            updating: true,
          } : item;
        }),
      };
    }
    case SET_LIKE_SUCCESS: {
      const {id, like} = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
  				return item.id === id ? {
  						...item,
  						like,
              updating: false,
  					} : item;
          }),
      };
    }
    case SET_LIKE_FAIL: {
      const {id, err} = action.payload;
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === id ? {
            ...item,
            updating: false,
            //updateErr: err,
          } : item;
        }),
      };
    }
    default:
      return state;
  }
}
