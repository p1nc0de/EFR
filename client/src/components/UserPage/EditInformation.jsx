import React, { useState } from 'react';
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
  const [open, setOpen] = useState(true);
  return (
    <>
      {open
      && (
      <CardActions>
        <Button type="button" onClick={() => { setEdit(!edit); setOpen(!open); }} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none', margin: '1rem', width: 330 }}>
          Редактировать
        </Button>
      </CardActions>
      )}
      {edit
        && (
        <>
          <Button
            onClick={() => dispatch(updateUser(id, form), setEdit(!edit), setOpen(!open))}
            type="submit"
            variant="contained"
            size="sm"
            sx={{
              textDecoration: 'none', width: 330, backgroundColor: 'gray', opacity: 0.8, color: 'black', '&:hover': { backgroundColor: 'red', color: 'white' },
            }}
          >
            Сохранить
          </Button>
          <Button
            onClick={() => dispatch(getUser(id), setEdit(!edit), setOpen(!open))}
            type="button"
            variant="contained"
            size="sm"
            sx={{
              textDecoration: 'none', width: 330, backgroundColor: 'gray', opacity: 0.8, color: 'black', '&:hover': { backgroundColor: 'grey', color: 'white' },
            }}
          >
            Отменить
          </Button>
        </>

        )}
    </>

  );
}
