import {
  get as getCatApi,
} from '../api/cats';

export const FETCH_CAT_BY_ID_REQUEST = "cat/FETCH_CAT_BY_ID_REQUEST";
export const FETCH_CAT_BY_ID_SUCCESS = "cat/FETCH_CAT_BY_ID_SUCCESS";
export const FETCH_CAT_BY_ID_FAIL = "cat/FETCH_CAT_BY_ID_FAIL";


const fetchCatByIDRequest = () => ({
  type: FETCH_CAT_BY_ID_REQUEST,
})

const fetchCatByIDSuccess = item => ({
  type: FETCH_CAT_BY_ID_SUCCESS,
  payload: {
    item,
  },
})

const fetchCatByIDFail = err => ({
  type: FETCH_CAT_BY_ID_FAIL,
  payload: {
    err,
  },
})

export const fetchCatByID = id => {
  return async (dispatch) => {
    try {
      dispatch(fetchCatByIDRequest(id));
      const cat = await getCatApi(id);
      dispatch(fetchCatByIDSuccess(cat));
    } catch (err) {
      console.log(err);
      dispatch(fetchCatByIDFail(err));
    }
  };
};
