import { SET_ONE_CITY, SET_ALL_CITIES } from '../types';

export default function cityReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE_CITY:
      return payload;
    case SET_ALL_CITIES:
      return payload;
    default:
      return state;
  }
}
