
export const ADD_CAT_REQUEST = "cats/ADD_CAT_REQUEST";
export const ADD_CAT_SUCCESS = "cats/ADD_CAT_SUCCESS";
export const ADD_CAT_FAIL = "cats/ADD_CAT_FAIL";

export const REMOVE_CAT = "cats/REMOVE_CAT";
export const SET_LIKE = "cats/SET_LIKE";
export const SET_FILTER = "cats/SET_FILTER";
export const SET_SORTING = "cats/SET_SORTING";

export const FETCH_CATS_REQUEST = "cats/FETCH_CATS_REQUEST";
export const FETCH_CATS_SUCCESS = "cats/FETCH_CATS_SUCCESS";
export const FETCH_CATS_FAIL = "cats/FETCH_CATS_FAIL";


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
      const response = await fetch('http://localhost:8000/cats');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const cats = await response.json();
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
      const response = await fetch('http://localhost:8000/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const cat = await response.json();
      dispatch(addCatSuccess(cat));
    } catch (err) {
      console.log(err);
      dispatch(addCatFail(err));
    }
  };
};

export const removeCat = id => {
  return async (dispatch) => {
    try {
      const address = `http://localhost:8000/cats/${id}`;
      const response = await fetch(address, {
        method: 'DELETE',
      });
      const result = await response.json();
      dispatch({
        type: REMOVE_CAT,
        payload: {
          id: result.success ? id : '',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLike = (id, value) => {
  return async (dispatch) => {
    try {
      const address = `http://localhost:8000/cats/${id}/like?value=${value}`;
      const response = await fetch(address);
      const result = await response.json();
      dispatch({
        type: SET_LIKE,
        payload: {
          id: result.success ? id : '',
          like: value,
        },
      });
    } catch (err) {
      console.log(err);
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
