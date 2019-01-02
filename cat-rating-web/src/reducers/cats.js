import {
  ADD_CAT,
  REMOVE_CAT,
  SET_LIKE,
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAIL,
} from "../actions/cats";


const initialState = {
  items: [
    /*{
      id: 1,
      name: "Kisa",
      icon: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1770700/1160/772/m1/fpnw/wm0/black-cat-icon-flat-01-.jpg?1476726021&s=c956a64f60cd25e39dcd353c52e188a1",
      like: true,
    },
    {
      id: 2,
      name: "Kotya",
      icon: "https://cdn3.iconfinder.com/data/icons/cat-force/256/cat_hungry.png",
      like: true,
    },*/
  ],
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
    case ADD_CAT: {
      const { item } = action.payload;
      return {
        ...state,
        items: [...state.items, item],
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
