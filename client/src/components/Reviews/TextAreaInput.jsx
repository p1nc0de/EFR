import { Box, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { submitReviewAsync } from '../../redux/actions/reviewActions';

export default function TextAreaInput(id) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const changeHandler = useCallback((e) => setInput(e.target.value), []);
  const submitHandler = (e) => dispatch(submitReviewAsync(e, input, setInput, id));
  return (
    <Box component="form" onSubmit={submitHandler}>
      <Textarea
        color="danger"
        disabled={false}
        minRows={2}
        placeholder="Напиши что-нибудь"
        size="lg"
        variant="outlined"
        value={input}
        onChange={changeHandler}
      />
      <Button type="submit" variant="contained" color="error">
        Оставить отзыв
      </Button>
    </Box>
  );
}
