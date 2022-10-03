import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUser, getUser } from '../../redux/actions/userActions';

export default function EditUserPage({ edit, setEdit, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" className="btn btn-outline-primary" onClick={() => setEdit(!edit)}>Редактировать</button>
      {edit
        && (
        <>
          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(getUser(id), setEdit(!edit))}>Отменить</button>
          <button type="button" className="btn btn-outline-success" onClick={() => dispatch(updateUser(id), setEdit(!edit))}>Сохранить</button>
        </>
        )}
    </>

  );
}
