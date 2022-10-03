import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUsers } from '../../redux/actions/userActions';
import { getUser, updateUser } from '../../redux/actions/userActions';
import EditUserPage from './EditUserPage';

export default function UserPage() {
  const [edit, setEdit] = useState(false);
  console.log(edit);

  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user);
  // console.log(users);

  const user = useSelector((state) => state.user);
  // console.log(user);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

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

  const changeHandler = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => dispatch(updateUser(e, form));

  return (
    <>
      {/* <div>
        {users && users?.map((el) => (<div>{ el.email }</div>))}
      </div> */}
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user?.avatar} className="img-fluid rounded-start" alt={`${user?.login}`} />
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
                    <form className="row" onSubmit={submitHandler}>
                      <p className="card-text"><small className="text-muted">{user?.email}</small></p>
                      <input className="form-control" id="edit_avatar" name="avatar" type="text" value={form.avatar} onChange={changeHandler} />
                      <input className="form-control" id="edit_login" name="login" type="text" value={form.login} onChange={changeHandler} />
                      <input className="form-control" id="edit_info" name="info" type="text" value={form.info} onChange={changeHandler} />
                      <input className="form-control" id="edit_profession" name="profession" type="text" value={form.profession} onChange={changeHandler} />
                      <input className="form-control" id="edit_telegram" name="telegram" type="text" value={form.telegram} onChange={changeHandler} />
                      <input className="form-control" id="edit_birth_country" name="birth_country" type="text" value={form.birth_country} onChange={changeHandler} />
                      <input className="form-control" name="current_country" type="text" value={form.current_country} onChange={changeHandler} />
                      <input className="form-control" name="future_country" type="text" value={form.future_country} onChange={changeHandler} />
                    </form>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditUserPage edit={edit} setEdit={setEdit} id={id} />
    </>
  );
}
