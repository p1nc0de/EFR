import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CardActions,
} from '@mui/material';
import Button from '@mui/material/Button';
import { updateUser, getUser } from '../../redux/actions/userActions';

export default function EditInformation({
  edit, setEdit, id, form,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <CardActions>
        <Button type="button" onClick={() => setEdit(!edit)} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none', margin: '1rem' }}>
          Редактировать
        </Button>
      </CardActions>
      {edit
        && (
        <>
          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(getUser(id), setEdit(!edit))}>Отменить</button>
          <button type="button" className="btn btn-outline-success" onClick={() => dispatch(updateUser(id, form), setEdit(!edit))}>Сохранить</button>
        </>

        )}
    </>

  );
}
