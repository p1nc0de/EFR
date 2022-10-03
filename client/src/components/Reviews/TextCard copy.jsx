import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Button, CardActions, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../redux/actions/reviewActions';

export default function TextCard({ rev, id }) {
  const dispatch = useDispatch();
  // надо вывести автора поста и его аватарку
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500px"
        width="50px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCO3208kIvCTldI6x54IwNWjb59IMWYwCQA&usqp=CAU"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {rev?.review}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(deleteReview(id))} variant="contained" color="error">Удалить</Button>
        <Button variant="contained" color="inherit">Исправить</Button>
      </CardActions>
    </Card>
  );
}
