import * as React from 'react';
import {
  Avatar, Button, CardActions, Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteReviewAsync } from '../../redux/actions/reviewActions';

export default function TextCard({ authUser, rev, id }) {
  const dispatch = useDispatch();

  return (
    <Grid
      item
      md={3}
      sm={4}
      xs={12}
      sx={{
        bgcolor: '#37383E',
        color: 'white',
        margin: '1px',
        marginBottom: '30px',
        minHeight: '300px',
        maxHeight: '100px',
        borderRadius: '10px',
      }}

    >
      <div style={{
        marginLeft: '3%',
        marginTop: '2%',
      }}
      >
        {rev?.User?.avatar?.includes('http')
          ? (
            <Avatar
              alt="EFR"
              src={`${rev?.User?.avatar}`}
              sx={{ width: 54, height: 54 }}
            />
          )
          : (
            <Avatar
              alt="EFR"
              src={`http://localhost:3001/photos/${rev?.User?.avatar}`}
              sx={{ width: 54, height: 54 }}
            />
          )}

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
          <Button
            component={NavLink}
            to={`/users/${rev?.User?.id}`}
            sx={{ color: 'red' }}
          >
            {rev?.User?.login}

          </Button>

        </div>
      </div>
      <div className="right-text">
        <div
          className="high"
          style={{
            width: '90%',
            maxHeight: '140px',
            height: '45%',
            marginLeft: '5%',
            marginTop: '7px',
            overflowY: 'scroll',

          }}
        >
          <p>
            {' '}
            {rev?.review}
          </p>
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
