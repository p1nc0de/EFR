import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../redux/actions/reviewActions';

export default function TextCard({ rev, id }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // image={`${user?.avatar}`}
          alt="фотография 10х12"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rev?.review}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Автор:
            {/* {user?.login} */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => dispatch(deleteReview(id))} variant="contained" color="error">Удалить</Button>
          <Button variant="contained" color="inherit">Исправить</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
