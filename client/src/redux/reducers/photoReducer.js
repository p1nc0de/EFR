import { SET_ALL_PHOTOS } from '../types';

export default function photoReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_PHOTOS:
      return payload;
    default:
      return state;
  }
}
