import {
  FETCH_CAT_BY_ID_REQUEST,
  FETCH_CAT_BY_ID_SUCCESS,
  FETCH_CAT_BY_ID_FAIL,
} from "../actions/cat";


const initialState = {
  data: {},
  fetching: false,
  fetchErr: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAT_BY_ID_REQUEST: {
      return {
        ...state,
        fetching: true,
        fetchErr: null,
      };
    }
    case FETCH_CAT_BY_ID_SUCCESS: {
      const {item} = action.payload;
      return {
        ...state,
        data: item,
        fetching: false,
        fetchErr: null,
      };
    }
    case FETCH_CAT_BY_ID_FAIL: {
      const {err} = action.payload;
      return {
        ...state,
        data: {},
        fetching: false,
        fetchErr: err,
      };
    }
    default:
      return state;
  }
}
