import axios from 'axios';
import { SET_ONE_CITY } from '../types';

export const setOneCity = (payload) => ({ type: SET_ONE_CITY, payload });

export const fetchOneCity = (id) => (dispatch) => {
  axios(`/api/city/${id}`)
    .then((res) => dispatch(setOneCity(res.data)))
    .catch(console.log);
};
