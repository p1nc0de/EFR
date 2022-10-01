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
      return state.map((user) => (user.id === payload.id ? payload : user)); // payload -> user
    case DELETE_USER:
      return state.filter((user) => user.id !== payload); // payload -> id
    default:
      return state;
  }
}
