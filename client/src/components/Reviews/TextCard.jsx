import * as React from 'react';
import Card from '@mui/material/Card';
import {
  Avatar, Button, CardActions, Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReviewAsync } from '../../redux/actions/reviewActions';

export default function TextCard({ authUser, rev, id }) {
  const dispatch = useDispatch();

  return (

    <Grid items sx={{ magrinLeft: '5vw', marginTop: '-5vw' }}>
      <div className="total-review">
        <Avatar
          alt="EFR"
          src={`${rev?.User?.avatar}`}
          sx={{ width: 54, height: 54 }}
        />
        <div className="right-text">
          <div className="high">
            <h6>
              {' '}
              {rev?.review}
            </h6>
          </div>
          <div className="low">
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

        </div>
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
