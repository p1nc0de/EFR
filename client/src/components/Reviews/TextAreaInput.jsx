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
    <Box
      sx={{ bgcolor: '#101010' }}
      component="form"
      onSubmit={submitHandler}
    >
      <Textarea
        sx={{ bgcolor: '#544c4c' }}
        style={{ color: 'white' }}
        disabled={false}
        minRows={3}
        id='inputReview'
        color="danger"
        placeholder="Напиши cвои впечатления о городе"
        size="md"
        variant="outlined"
        value={input}
        onChange={changeHandler}

      />
      <Button
        style={{
          position: 'relative',
          left: '84%',
          width: '16%',
          top: '10px',
        }}
        sx={{ textDecoration: 'none', backgoundColor: 'black', '&:hover': { backgroundColor: 'red', color: 'black' } }}
        type="submit"
        variant="contained"
        color="error"
      >
        Оставить отзыв
      </Button>
    </Box>
  );
}
