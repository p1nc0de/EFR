/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../redux/actions/userActions';

export default function EditAvatar(id) {
  const dispatch = useDispatch();

  const [editAvatar, setEditAvatar] = useState(false);

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
      <button type="button" className="btn btn-outline-success" onClick={() => setEditAvatar(true)}>Редактировать фотографию</button>
      {editAvatar
        && (
          <form onSubmit={submitHandlerMulter}>
            <input className="form-control" name="avatar" type="file" onChange={changeHandlerMulter} />
            <button type="submit" className="btn btn-outline-dark">Сохранить</button>
          </form>
        )}
    </>
  );
}
