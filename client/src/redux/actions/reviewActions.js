import axios from 'axios';
import {
  ADD_REVIEW, DELETE_REVIEW, SET_ALL_REVIEW, UPDATE_REVIEW,
} from '../types';

export const setAllReview = (payload) => ({ type: SET_ALL_REVIEW, payload });
export const addReview = (payload) => ({ type: ADD_REVIEW, payload });
export const deleteReview = (payload) => ({ type: DELETE_REVIEW, payload });
export const updateReview = (payload) => ({ type: UPDATE_REVIEW, payload });

export const submitReviewAsync = (e, input, setInput) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/reviews', { input })
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

export const deleteReviewAsync = (id) => (dispatch) => {
  axios(`/api/reviews/${id}`)
    .then(() => dispatch(deleteReview(id)))
    .catch(console.log());
};
// возможно нужно вкладывать не айди, а текст(инпут)
export const updateReviewAsync = (id) => (dispatch) => {
  axios(`/api/reviews/${id}`)
    .then(() => dispatch(updateReview(id)))
    .catch(console.log());
};
