import { SET_FILTER } from "../actions/cats";

const initialState = {
  value: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { value } = action.payload;
      return {
        ...state,
        value,
      };
    }
    default:
      return state;
  }
}
