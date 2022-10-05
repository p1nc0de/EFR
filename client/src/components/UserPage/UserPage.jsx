import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar, Box, Grid, Container, Badge,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatarka from '@mui/material/Avatar';
import Person2 from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import CakeIcon from '@mui/icons-material/Cake';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TelegramIcon from '@mui/icons-material/Telegram';
import PlaceIcon from '@mui/icons-material/Place';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import { getUser, updateUser } from '../../redux/actions/userActions';
import EditInformation from './EditInformation';
import EditAvatar from './EditAvatar';
import TelegramButton from './TelegramButton';

const theme = createTheme({
  palette: { primary: { main: '#FFFFFF' } },
});

export default function UserPage() {
  const [edit, setEdit] = useState(false);
  const authUser = useSelector((store) => store.authUser);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const [form, setForm] = useState({
    login: user?.login || '',
    info: user?.info || '',
    profession: user?.profession || '',
    telegram: user?.telegram || '',
    birth_country: user?.birth_country || '',
    current_country: user?.current_country || '',
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

  console.log(user.avatar);
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{
        maxWidth: 1000,
        marginTop: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f3',
        boxShadow: 15,
        // opacity: 0.9,
      }}
      >
        <Container component="main" maxWidth="lg">
          <Grid container direction="row">
            <Divider variant="inset" component="li" />
            <Box
              sx={{
                marginTop: 1,
                marginBottom: 3,
                marginRight: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
              }}
            >
              <Typography
                variant="h2"
                textColor="#fff"
                mt={{ sm: 1 }}
              >
                {user?.login}
              </Typography>

              {authUser?.id && (
              <Typography
                variant="body2"
                color="#2e2e36"
                mt={{ sm: 1 }}
              >
                {user?.email}
              </Typography>
              )}

              {authUser?.id === user?.id ? (
                <>
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
                          alt={user?.login}
                          src={user?.avatar}
                          sx={{ minWidth: 400, minHeight: 400 }}
                          style={{
                            border: '1px solid lightgray',
                          }}
                        />

                      )
                      : (
                        <Avatar
                          alt={user?.login}
                          src={`http://localhost:3001/photos/${user?.avatar}`}
                          sx={{ minWidth: 400, minHeight: 400 }}
                        />
                      )}
                  </Badge>
                </>
              )
                : (
                  <>
                    {user?.avatar?.includes('http')
                      ? (
                        <Avatar
                          alt={user?.login}
                          src={user?.avatar}
                          sx={{ minWidth: 400, minHeight: 400 }}
                        />
                      )
                      : (
                        <Avatar
                          alt={user?.login}
                          src={`http://localhost:3001/photos/${user?.avatar}`}
                          sx={{ minWidth: 400, minHeight: 400 }}
                        />
                      )}
                  </>
                )}
            </Box>
            <Box
              sx={{
                marginTop: 10,
                marginLeft: 10,
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
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <Person2 fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.info ? user?.info : ''}`} secondary="О себе" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <WorkIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.profession ? user?.profession : ''}`} secondary="Профессия" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <CakeIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.birth_country ? user?.birth_country : ''}`} secondary="Страна рождения" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <PlaceIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.current_country}`} secondary="Город проживания" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <TravelExploreIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.future_country}`} secondary="Место мечты" />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    {authUser?.id && (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <TelegramIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.telegram ? user?.telegram : ''}`} secondary="Telegram" />
                    </ListItem>
                    )}
                  </List>
                ) : (

                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '35ch' },
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitHandler}
                  >
                    <TextField
                      name="login"
                      type="text"
                      label="Имя пользователя"
                      defaultValue={form.login}
                      variant="standard"
                      onChange={changeHandler}
                    />
                    <TextField
                      name="info"
                      type="text"
                      label="Информация о себе"
                      defaultValue={form.info}
                      variant="standard"
                      onChange={changeHandler}
                    />
                    <TextField
                      name="profession"
                      type="text"
                      label="Профессия"
                      defaultValue={form.profession}
                      variant="standard"
                      onChange={changeHandler}
                    />
                    <TextField
                      name="birth_country"
                      type="text"
                      label="Страна рождения"
                      defaultValue={form.birth_country}
                      variant="standard"
                      onChange={changeHandler}
                    />
                    <TextField
                      name="future_country"
                      type="text"
                      label="Место мечты"
                      defaultValue={form.future_country}
                      variant="standard"
                      onChange={changeHandler}
                    />
                    <TextField
                      name="current_country"
                      type="text"
                      label="Город проживания"
                      defaultValue={form.current_country}
                      variant="standard"
                      onChange={changeHandler}
                    />
                    <TextField
                      name="telegram"
                      type="text"
                      label="Telegram"
                      defaultValue={form.telegram}
                      variant="standard"
                      onChange={changeHandler}
                    />
                  </Box>
                )}
              {authUser?.id === user?.id ? (
                <>
                  <EditInformation edit={edit} setEdit={setEdit} id={id} form={form} />
                  <Typography
                    variant="caption"
                    color="#2e2e36"
                    mt={{ sm: -2 }}
                  >
                    {`Последнее обновление: ${new Date(user?.updatedAt).toLocaleString()}`}
                  </Typography>
                </>
              ) : (
                <TelegramButton user={user} authUser={authUser} />
              )}
            </Box>
            <Divider variant="inset" component="li" />
          </Grid>
        </Container>
      </Card>
    </ThemeProvider>
  );
}
