/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import EditIcon from '@mui/icons-material/Edit';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { updateAvatar } from '../../redux/actions/userActions';

export default function EditAvatar(id) {
  const dispatch = useDispatch();

  const [editAvatar, setEditAvatar] = useState(false);
  const [open, setOpen] = useState(true);

  const [multerInput, setMulterInput] = useState('');
  const changeHandlerMulter = (e) => setMulterInput(e.target.files[0]);

  const submitHandlerMulter = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', multerInput);
    dispatch(updateAvatar(id, data));
    setEditAvatar(!editAvatar);
  };
  return (
    <>
      {open
      && (
      <Fab color="error" aria-label="edit">
        <AddPhotoAlternateIcon onClick={() => { setEditAvatar(!editAvatar); setOpen(!open); }} />
      </Fab>
      )}
      {/* <button type="button" className="btn btn-outline-success" onClick={() => setEditAvatar(true)}>Редактировать фотографию</button> */}
      {editAvatar
        && (
          <form onSubmit={submitHandlerMulter}>
            <input className="form-control" name="avatar" type="file" onChange={changeHandlerMulter} />
            {/* <button type="submit" className="btn btn-outline-success">Сохранить</button> */}
            <Button
              onClick={() => setOpen(!open)}
              type="submit"
              variant="contained"
              size="sm"
              sx={{
                textDecoration: 'none', width: 400, backgroundColor: 'gray', opacity: 0.8, color: 'black', '&:hover': { backgroundColor: 'red', color: 'white' },
              }}
            >
              Сохранить
            </Button>
            <Button
              onClick={() => { setEditAvatar(!editAvatar); setOpen(!open); }}
              type="button"
              variant="contained"
              size="sm"
              sx={{
                textDecoration: 'none', width: 400, backgroundColor: 'gray', opacity: 0.8, color: 'black', '&:hover': { backgroundColor: 'grey', color: 'white' },
              }}
            >
              Отменить
            </Button>
          </form>
        )}
    </>
  );
}
