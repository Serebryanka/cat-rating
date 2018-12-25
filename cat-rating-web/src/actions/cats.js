export const ADD_CAT = "cats/ADD_CAT";
export const REMOVE_CAT = "cats/REMOVE_CAT";
export const TOGGLE_LIKE = "cats/TOGGLE_LIKE";
export const SET_FILTER = "cats/SET_FILTER";
export const SET_SORTING = "cats/SET_SORTING";


let nextCatId = 2;

export const addCat = item => ({
  type: ADD_CAT,
  payload: {
    item: {
      ...item,
      id: ++nextCatId,
    }
  },
});

export const removeCat = id => ({
  type: REMOVE_CAT,
  payload: {
    id: id,
  },
});

export const toggleLike = id => ({
  type: TOGGLE_LIKE,
  payload: {
    id: id,
  },
});

export const setFilter = text => ({
  type: SET_FILTER,
  payload: {
    value: text,
  },
});

export const setSorting = sortBy => ({
  type: SET_SORTING,
  payload: {
    sortField: sortBy,
  },
});
