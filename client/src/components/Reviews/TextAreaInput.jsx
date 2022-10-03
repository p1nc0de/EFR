import { Box, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import React from 'react'
import { submitReviewAsync } from '../../redux/actions/reviewActions';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function TextAreaInput() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const changeHandler = useCallback((e) => setInput(e.target.value), []);
    const submitHandler = (e) => dispatch(submitReviewAsync(e, input, setInput))
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
            <Button sx={{ borderRadius: '50%' }} type="submit" variant="outlined" color="error">
                Оставить отзыв
            </Button>
        </Box >
    )
}
