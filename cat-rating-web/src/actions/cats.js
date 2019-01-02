export const ADD_CAT = "cats/ADD_CAT";
export const REMOVE_CAT = "cats/REMOVE_CAT";
export const SET_LIKE = "cats/SET_LIKE";
export const SET_FILTER = "cats/SET_FILTER";
export const SET_SORTING = "cats/SET_SORTING";
export const FETCH_CATS = "cats/FETCH_CATS";



export const fetchCats = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8000/cats');
      const cats = await response.json();
      dispatch({
        type: FETCH_CATS,
        payload: {
          items: cats,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCat = item => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8000/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });
      const cat = await response.json();
      dispatch({
        type: ADD_CAT,
        payload: {
          item: cat,
        },
      });
    } catch (err) {
      console.log(err);
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
