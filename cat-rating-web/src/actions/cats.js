export const ADD_CAT = "cats/ADD_CAT";
export const REMOVE_CAT = "cats/REMOVE_CAT";
export const TOGGLE_LIKE = "cats/TOGGLE_LIKE";

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
