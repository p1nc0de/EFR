import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUsers } from '../../redux/actions/userActions';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { getUser, updateUser } from '../../redux/actions/userActions';
import EditUserPage from './EditUserPage';

export default function UserPage() {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  // console.log(edit);

  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user);
  // console.log(users);

  const user = useSelector((state) => state.user);
  // console.log(user);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  const { id } = useParams();

  const [form, setForm] = useState({
    avatar: user?.avatar || '',
    login: user?.login || '',
    info: user?.info || '',
    profession: user?.profession || '',
    telegram: user?.telegram || '',
    birth_country: user?.birth_country || '',
    current_country: user?.current_country || '1',
    future_country: user?.future_country || '1',
  });

  useEffect(() => {
    dispatch(getUser(id));
    setForm({
      avatar: user?.avatar || '',
      login: user?.login || '',
      info: user?.info || '',
      profession: user?.profession || '',
      telegram: user?.telegram || '',
      birth_country: user?.birth_country || '',
      current_country: user?.current_country || '',
      future_country: user?.future_country || '',
    });
  }, [edit]);

  const [multerInput, setMulterInput] = useState('');

  const changeHandler = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => dispatch(updateUser(e, form));

  // eslint-disable-next-line max-len
  // const changeHandlerMulter = (e) => setMulterInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  const changeHandlerMulter = (e) => setMulterInput(e.target.files[0]);

  const submitHandlerMulter = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', multerInput);
    axios.patch(`/api/users/${id}/avatar`, data)
      .then(() => navigate(`/users/${id}`))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <div>
        {users && users?.map((el) => (<div>{ el.email }</div>))}
      </div> */}
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              {user?.avatar?.includes('http')
                ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={user?.avatar}
                    sx={{ width: 250, height: 250 }}
                  />
                )
                : (
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:3001/photos/${user?.avatar}`}
                    sx={{ width: 250, height: 250 }}
                  />
                )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {!edit
                  ? (
                    <>
                      <h5 className="card-title">{user?.login}</h5>
                      <p className="card-text"><small className="text-muted">{user?.email}</small></p>
                      <p className="card-text">{`О себе: ${user?.info}`}</p>
                      <p className="card-text">{`Профессия: ${user?.profession}`}</p>
                      <p className="card-text">{`Страна рождения: ${user?.birth_country}`}</p>
                      <p className="card-text">{`Страна проживания: ${user?.current_country}`}</p>
                      <p className="card-text">{`Место мечты: ${user?.future_country}`}</p>
                      <p className="card-text"><small className="text-muted">{`Дата регистрации: ${new Date(user?.createdAt).toLocaleString()}`}</small></p>
                    </>
                  ) : (
                    <>
                      <form onSubmit={(e) => submitHandlerMulter(e)}>
                        <button type="submit" className="btn btn-outline-dark">Изменить аватар</button>
                        <input className="form-control" name="avatar" type="file" onChange={changeHandlerMulter} />
                      </form>
                      <form className="row" onSubmit={submitHandler}>
                        <p className="card-text"><small className="text-muted">{user?.email}</small></p>
                        <input className="form-control" name="login" type="text" value={form.login} onChange={changeHandler} />
                        <input className="form-control" name="info" type="text" value={form.info} onChange={changeHandler} />
                        <input className="form-control" name="profession" type="text" value={form.profession} onChange={changeHandler} />
                        <input className="form-control" name="telegram" type="text" value={form.telegram} onChange={changeHandler} />
                        <input className="form-control" name="birth_country" type="text" value={form.birth_country} onChange={changeHandler} />
                        <input className="form-control" name="current_country" type="text" value={form.current_country} onChange={changeHandler} />
                        <input className="form-control" name="future_country" type="text" value={form.future_country} onChange={changeHandler} />
                      </form>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditUserPage edit={edit} setEdit={setEdit} id={id} form={form} />
    </>
  );
}
