import axios from 'axios';
import { SET_ALL_PHOTOS } from '../types';

export const setAllPhotos = (payload) => ({ type: SET_ALL_PHOTOS, payload });

export const fetchAllPhotos = (id) => (dispatch) => {
  axios(`/api/city/${id}/photos`)
    .then((res) => dispatch(setAllPhotos(res.data)))
    .catch(console.log);
};
