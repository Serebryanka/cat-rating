import {
  list as listCatsApi,
  create as createCatApi,
  remove as removeCatApi,
  like as likeCatApi,
} from '../api/cats';

export const FETCH_CATS_REQUEST = "cats/FETCH_CATS_REQUEST";
export const FETCH_CATS_SUCCESS = "cats/FETCH_CATS_SUCCESS";
export const FETCH_CATS_FAIL = "cats/FETCH_CATS_FAIL";

export const ADD_CAT_REQUEST = "cats/ADD_CAT_REQUEST";
export const ADD_CAT_SUCCESS = "cats/ADD_CAT_SUCCESS";
export const ADD_CAT_FAIL = "cats/ADD_CAT_FAIL";

export const REMOVE_CAT_REQUEST = "cats/REMOVE_CAT_REQUEST";
export const REMOVE_CAT_SUCCESS = "cats/REMOVE_CAT_SUCCESS";
export const REMOVE_CAT_FAIL = "cats/REMOVE_CAT_FAIL";

export const SET_LIKE_REQUEST = "cats/SET_LIKE_REQUEST";
export const SET_LIKE_SUCCESS = "cats/SET_LIKE_SUCCESS";
export const SET_LIKE_FAIL = "cats/SET_LIKE_FAIL";

export const SET_FILTER = "cats/SET_FILTER";
export const SET_SORTING = "cats/SET_SORTING";


const fetchCatsRequest = () => ({
  type: FETCH_CATS_REQUEST,
})

const fetchCatsSuccess = items => ({
  type: FETCH_CATS_SUCCESS,
  payload: {
    items,
  },
})

const fetchCatsFail = err => ({
  type: FETCH_CATS_FAIL,
  payload: {
    err,
  },
})

export const fetchCats = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCatsRequest());
      const cats = await listCatsApi();
      dispatch(fetchCatsSuccess(cats));
    } catch (err) {
      console.log(err);
      dispatch(fetchCatsFail(err));
    }
  };
};

const addCatRequest = () => ({
  type: ADD_CAT_REQUEST,
})

const addCatSuccess = item => ({
  type: ADD_CAT_SUCCESS,
  payload: {
    item,
  },
})

const addCatFail = err => ({
  type: ADD_CAT_FAIL,
  payload: {
    err,
  },
})

export const addCat = item => {
  return async (dispatch) => {
    try {
      dispatch(addCatRequest());
      const cat = await createCatApi(item);
      dispatch(addCatSuccess(cat));
    } catch (err) {
      console.log(err);
      dispatch(addCatFail(err));
    }
  };
};

const removeCatRequest = id => ({
  type: REMOVE_CAT_REQUEST,
  payload: {
    id,
  }
})

const removeCatSuccess = id => ({
  type: REMOVE_CAT_SUCCESS,
  payload: {
    id,
  },
})

const removeCatFail = (id, err) => ({
  type: REMOVE_CAT_FAIL,
  payload: {
    id,
    err,
  },
})

export const removeCat = id => {
  return async (dispatch) => {
    try {
      dispatch(removeCatRequest(id));
      await removeCatApi(id);
      dispatch(removeCatSuccess(id));
    } catch (err) {
      console.log(err);
      dispatch(removeCatFail(err));
    }
  };
};

const setLikeRequest = id => ({
  type: SET_LIKE_REQUEST,
  payload: {
    id,
  }
})

const setLikeSuccess = (id, value) => ({
  type: SET_LIKE_SUCCESS,
  payload: {
    id,
    like: value,
  },
})

const setLikeFail = (id, err) => ({
  type: SET_LIKE_FAIL,
  payload: {
    id,
    err,
  },
})

export const setLike = (id, value) => {
  return async (dispatch) => {
    try {
      dispatch(setLikeRequest(id));
      await likeCatApi(id, value);
      dispatch(setLikeSuccess(id, value));
    } catch (err) {
      console.log(err);
      dispatch(setLikeFail(err));
    }
  };
};

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
