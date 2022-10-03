import axios from 'axios';
import {
  ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEW, UPDATE_REVIEW, SET_CITY_REVIEWS,
} from '../types';

export const setAllReview = (payload) => ({ type: SET_ALL_REVIEW, payload });
export const setCityReviews = (payload) => ({ type: SET_CITY_REVIEWS, payload });
export const addReview = (payload) => ({ type: ADD_REVIEW, payload });
export const deleteReview = (payload) => ({ type: DELETE_REVIEW, payload });
export const updateReview = (payload) => ({ type: UPDATE_REVIEW, payload });

export const submitReviewAsync = (e, input, setInput, id) => (dispatch) => {
  e.preventDefault();
  const city_id = id;
  axios.post(`/api/city/${id}/reviews`, { input, city_id })
    .then((res) => {
      dispatch(addReview(res.data));
      setInput('');
      // как мы можем добавить отзыв именно к этому городу? как достать айди?
    })
    .catch(console.log);
};

export const fetchAllReviews = () => (dispatch) => {
  axios('/api/reviews')
    .then((res) => dispatch(setAllReview(res.data)))
    .catch(console.log);
};

export const fetchCityReviews = (id) => (dispatch) => {
  axios(`/api/city/${id}/reviews`)
    .then((res) => dispatch(setCityReviews(res.data)))
    .catch(console.log);
};

export const deleteReviewAsync = (id) => (dispatch) => {
  axios.delete(`/api/city/${id}/reviews`)
    .then(() => dispatch(deleteReview(id)))
    .catch(console.log());
};
// возможно нужно вкладывать не айди, а текст(инпут)
export const updateReviewAsync = (id) => (dispatch) => {
  axios.patch(`/api/city/${id}/reviews`)
    .then(() => dispatch(updateReview(id)))
    .catch(console.log());
};
