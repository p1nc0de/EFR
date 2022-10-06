import axios from 'axios';
import { SET_ALL_CURRENCIES } from '../types';

export const setCurrencies = (payload) => ({ type: SET_ALL_CURRENCIES, payload });

export const fetchCurrencies = (curr) => (dispatch) => {
  axios('/api/city/currency', { curr })
    .then((res) => dispatch(setCurrencies(res.data)))
    .catch(console.log);
};
