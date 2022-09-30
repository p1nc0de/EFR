import axios from 'axios';
import { SET_ONE_CITY, SET_ALL_CITIES } from '../types';

export const setOneCity = (payload) => ({ type: SET_ONE_CITY, payload });
export const setAllCities = (payload) => ({ type: SET_ALL_CITIES, payload });

export const fetchAllCities = () => (dispatch) => {
  axios('/api/city')
    .then((res) => dispatch(setAllCities(res.data)))
    .catch(console.log);
};

export const fetchOneCity = (id) => (dispatch) => {
  axios(`/api/city/${id}`)
    .then(() => dispatch(setOneCity(id)))
    .catch(console.log);
};
