import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { deleteReviewAsync } from '../../redux/actions/reviewActions';

export default function TextCard({ authUser, rev, id }) {
  const dispatch = useDispatch();

  return (

    <Card sx={{ maxWidth: 1000 }}>

      <CardActionArea>
        <Row>
          <Col>
            <CardMedia
              component="img"
              height="240"
              image={`${rev?.User?.avatar}`}
              alt="фотография 10х12"
            />
          </Col>
          <Col>
            <CardContent sx={{ width: '500px' }}>
              <Typography gutterBottom variant="body2" component="div">
                {rev?.review}
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
                <Button sx={{ color: 'red' }}>{rev?.User?.login}</Button>
              </Typography>
            </CardContent>
          </Col>
          {/* //отображение кнопок только автору ревью */}
          { authUser.id === rev?.User?.id
      && (
      <CardActions>
        <Button
          onClick={() => dispatch(deleteReviewAsync(id))}
          variant="contained"
          color="error"
        >
          Удалить

        </Button>
      </CardActions>
      )}
        </Row>
      </CardActionArea>

    </Card>

  );
}
