import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar, Box, Grid, Container, Badge,
} from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import { getUser, updateUser } from '../../redux/actions/userActions';
import EditInformation from './EditInformation';
import EditAvatar from './EditAvatar';

const theme = createTheme({
  palette: { primary: { main: '#FFFFFF' } },
});

export default function UserPage() {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const { id } = useParams();

  const [form, setForm] = useState({
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

      birth_country: user?.birth_country || '',
      current_country: user?.current_country || '',
      future_country: user?.future_country || '',
      telegram: user?.telegram || '',
    });
  }, [edit]);

  const changeHandler = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => dispatch(updateUser(e, form));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <Grid container direction="row">
          <Box
            sx={{
              // marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              textColor="#fff"
              mt={{ sm: 1 }}
            >
              {user?.login}
            </Typography>
            <p className="card-text"><small className="text-muted">{user?.email}</small></p>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={(
                <EditAvatar id={user.id} />
                )}
            >
              {user?.avatar?.includes('http')
                ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={user?.avatar}
                    sx={{ minWidth: 400, minHeight: 400 }}
                  />
                )
                : (
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:3001/photos/${user?.avatar}`}
                    sx={{ minWidth: 400, minHeight: 400 }}
                  />
                )}
            </Badge>
          </Box>
          <Box
            sx={{
              marginTop: 20,
              marginLeft: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'space-evenly',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            {!edit
              ? (
                <>
                  <Typography
                    variant="h4"
                    textColor="#fff"
                    mt={{ sm: 1 }}
                  >
                    Информация о пользователе
                  </Typography>
                  <p className="card-text">{`О себе: ${user?.info}`}</p>
                  <p className="card-text">{`Профессия: ${user?.profession}`}</p>
                  <p className="card-text">{`Страна рождения: ${user?.birth_country}`}</p>
                  <p className="card-text">{`Страна проживания: ${user?.current_country}`}</p>
                  <p className="card-text">{`Место мечты: ${user?.future_country}`}</p>
                  <p className="card-text">{`Telegram: ${user?.telegram}`}</p>
                </>
              ) : (
                <form className="row" onSubmit={submitHandler}>
                  <p className="card-text"><small className="text-muted">{user?.email}</small></p>
                  <input className="form-control" name="login" type="text" value={form.login} onChange={changeHandler} />
                  <input className="form-control" name="info" type="text" value={form.info} onChange={changeHandler} />
                  <input className="form-control" name="profession" type="text" value={form.profession} onChange={changeHandler} />
                  <input className="form-control" name="birth_country" type="text" value={form.birth_country} onChange={changeHandler} />
                  <input className="form-control" name="current_country" type="text" value={form.current_country} onChange={changeHandler} />
                  <input className="form-control" name="future_country" type="text" value={form.future_country} onChange={changeHandler} />
                  <input className="form-control" name="telegram" type="text" value={form.telegram} onChange={changeHandler} />
                </form>
              )}
            <EditInformation edit={edit} setEdit={setEdit} id={id} form={form} />
            <p className="card-text"><small className="text-muted">{`Последнее обновление: ${new Date(user?.updatedAt).toLocaleString()}`}</small></p>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
