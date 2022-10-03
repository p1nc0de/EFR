import { SET_ONE_CITY } from '../types';

export default function oneCityReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE_CITY:
      return payload;
    default:
      return state;
  }
}
