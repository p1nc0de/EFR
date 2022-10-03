import axios from 'axios';
import {
  SET_ALL_USERS, SET_USER, UPDATE_USER, DELETE_USER,
} from '../types';

export const setAllUsers = (payload) => ({ type: SET_ALL_USERS, payload });

export const setUser = (payload) => ({ type: SET_USER, payload });
export const changeUser = (payload) => ({ type: UPDATE_USER, payload });
export const deleteUser = (payload) => ({ type: DELETE_USER, payload });

export const getAllUsers = () => (dispatch) => {
  axios('/api/users')
    .then((res) => dispatch(setAllUsers(res.data)))
    .catch(console.log);
};

export const getUser = (id) => (dispatch) => {
  axios(`/api/users/${id}`)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const updateUser = (id, form) => (dispatch) => {
  axios.patch(`/api/users/${id}`, form)
    .then((res) => dispatch(changeUser(res.data)))
    .catch(console.log);
};

export const destroyUser = (id) => (dispatch) => {
  axios.delete(`/api/users/${id}`)
    .then(() => dispatch(deleteUser(id)))
    .catch(console.log);
};
