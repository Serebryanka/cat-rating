import { SET_SORTING } from "../actions/cats";

const initialState = {
  sortField: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SORTING: {
      const { sortField } = action.payload;
      return {
        ...state,
        sortField,
      };
    }
    default:
      return state;
  }
}
