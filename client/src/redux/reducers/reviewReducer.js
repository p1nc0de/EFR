import {
  ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEW, UPDATE_REVIEW, SET_CITY_REVIEWS,
} from '../types';

export default function reviewReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_REVIEW:
      return payload; // payload -> массив
    case SET_CITY_REVIEWS:
      return payload;
    case ADD_REVIEW:
      return [...state, payload];
    case UPDATE_REVIEW:
      return state.map((review) => (review.id === payload.id ? payload : review)); // payload -> user
    case DELETE_REVIEW:
      return state.filter((review) => review.id !== payload); // payload -> id
    default:
      return state;
  }
}
