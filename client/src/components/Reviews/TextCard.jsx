import * as React from 'react';
import {
  Avatar, Button, CardActions, Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReviewAsync } from '../../redux/actions/reviewActions';

export default function TextCard({ authUser, rev, id }) {
  const dispatch = useDispatch();

  return (
    <Grid
      item
      md={4}
      sm={6}
      xs={12}
      // md={{ magrinLeft: '5vw', marginTop: '5vw' }}
    >
      <div className="card">
        <Avatar
          alt="EFR"
          src={`${rev?.User?.avatar}`}
          sx={{ width: 54, height: 54 }}
        />
        <small>
          {' '}
          Дата публикации:
          {' '}
          {new Date(rev?.createdAt).toLocaleString()}
          {' '}
        </small>
        <div className="name">
          {' '}
          Автор:
          <Button sx={{ color: 'red' }}>{rev?.User?.login}</Button>

        </div>
      </div>
      <div className="right-text">
        <div className="high">
          <h6>
            {' '}
            {rev?.review}
          </h6>
        </div>
        <div className="low" />

      </div>
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
    </Grid>
  );
}
