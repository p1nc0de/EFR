import axios from 'axios';
import { SET_ONE_CITY, SET_ALL_CITIES, SET_COUNTRY_CITIES } from '../types';

export const setOneCity = (payload) => ({ type: SET_ONE_CITY, payload });
export const setAllCities = (payload) => ({ type: SET_ALL_CITIES, payload });
export const setCountryCities = (payload) => ({ type: SET_COUNTRY_CITIES, payload });

export const fetchAllCities = () => (dispatch) => {
  axios('/api/city')
    .then((res) => dispatch(setAllCities(res.data)))
    .catch(console.log);
};
export const fetchCountryCities = (id) => (dispatch) => {
  axios(`/api/city/country/${id}`)
    .then((res) => dispatch(setCountryCities(res.data)))
    .catch(console.log);
};

export const fetchOneCity = (id) => (dispatch) => {
  axios(`/api/city/${id}`)
    .then((res) => dispatch(setOneCity(res.data)))
    .catch(console.log);
};
