import axios from 'axios';
import {
  SET_ALL_USERS, SET_USER, UPDATE_USER, UPDATE_AVATAR_USER, DELETE_USER,
} from '../types';

export const setAllUsers = (payload) => ({ type: SET_ALL_USERS, payload });

export const setUser = (payload) => ({ type: SET_USER, payload });
export const changeUser = (payload) => ({ type: UPDATE_USER, payload });
export const changeAvatar = (payload) => ({ type: UPDATE_AVATAR_USER, payload });
export const deleteUser = (payload) => ({ type: DELETE_USER, payload });

export const getAllUsers = (id) => (dispatch) => {
  axios(`/api/users/city/${id}`)
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

export const updateAvatar = (id, data) => (dispatch) => {
  axios.patch(`/api/users/${id.id}/avatar`, data)
    .then((res) => dispatch(changeAvatar(res.data)))
    .catch((err) => console.log(err));
};

export const destroyUser = (id) => (dispatch) => {
  axios.delete(`/api/users/${id}`)
    .then(() => dispatch(deleteUser(id)))
    .catch(console.log);
};
