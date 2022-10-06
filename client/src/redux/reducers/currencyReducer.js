import { SET_ALL_CURRENCIES } from '../types';

export default function currencyReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_CURRENCIES:
      return payload;
    default:
      return state;
  }
}
