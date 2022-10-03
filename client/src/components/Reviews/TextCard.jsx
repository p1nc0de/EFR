import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../redux/actions/reviewActions';

export default function TextCard({ rev, id }) {
  const dispatch = useDispatch();
  // надо вывести автора поста и его аватарку
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {rev?.review}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ borderRadius: '50%' }} onClick={() => dispatch(deleteReview(id))} variant="outlined" color="error">Удалить</Button>
        <Button sx={{ borderRadius: '50%' }} variant="contained" color="secondary">Исправить</Button>
      </CardActions>
    </Card>
  );
}
