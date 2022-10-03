import {
  SET_ALL_USERS, SET_USER, UPDATE_USER, DELETE_USER,
} from '../types';

export default function userReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_USERS:
      return payload; // payload -> массив
    case SET_USER:
      return payload;
    case UPDATE_USER:
      return payload;
    case DELETE_USER:
      return payload;
    default:
      return state;
  }
}
