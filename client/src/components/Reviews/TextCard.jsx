import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../redux/actions/reviewActions';

export default function TextCard({ authUser, rev, id }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={`${rev?.User?.avatar}`}
          alt="фотография 10х12"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rev?.review}
            {' '}

          </Typography>
          <small>
            {' '}
            Дата публикации:
            {' '}
            {new Date(rev?.createdAt).toLocaleString()}
            {' '}
          </small>
          <Typography variant="body2" color="text.secondary">
            Автор:
            {rev?.User?.login}
          </Typography>
        </CardContent>
        {/* //отображение кнопок только автору ревью */}
        { authUser.id === rev?.User?.id
        && (
        <CardActions>
          <Button onClick={() => dispatch(deleteReview(id))} variant="contained" color="error">Удалить</Button>
          <Button variant="contained" color="inherit">Исправить</Button>
        </CardActions>
        )}
      </CardActionArea>
    </Card>
  );
}
