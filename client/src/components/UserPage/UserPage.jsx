import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Avatar, Box, Grid, Container, Badge,
} from '@mui/material';
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

const theme = createTheme({
  palette: { primary: { main: '#FFFFFF' } },
});

export default function UserPage() {
  const [edit, setEdit] = useState(false);
  // const authUser = useSelector((store) => store.authUser);
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
      }}
      >
        <Container component="main" maxWidth="lg">
          <Grid container direction="row">
            <Divider variant="inset" component="li" />
            <Box
              sx={{
                // marginTop: 10,
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
              <p className="card-text"><small className="text-muted">{user?.email}</small></p>
              {/* {authUser?.id === user?.id ? ( */}
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
              {/* )
                : (
                  <>
                    {user?.avatar?.includes('http')
                      ? (
                        <Avatar
                          alt={user?.login}
                          src={user?.avatar}
                          sx={{ minWidth: 300, minHeight: 300 }}
                        />
                      )
                      : (
                        <Avatar
                          alt={user?.login}
                          src={`http://localhost:3001/photos/${user?.avatar}`}
                          sx={{ minWidth: 300, minHeight: 300 }}
                        />
                      )}
                  </>
                )} */}
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
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <CakeIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.birth_country ? user?.birth_countr : ''}`} secondary="Страна рождения" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <Avatarka>
                          <TelegramIcon fontSize="small" />
                        </Avatarka>
                      </ListItemAvatar>
                      <ListItemText primary={`${user?.telegram ? user?.telegram : ''}`} secondary="Telegram" />
                    </ListItem>
                  </List>
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
              {/* {authUser?.id === user?.id ? ( */}
              <EditInformation edit={edit} setEdit={setEdit} id={id} form={form} />
              {/* ) : ( */}
              <div />
              {/* )} */}
              <p className="card-text"><small className="text-muted">{`Последнее обновление: ${new Date(user?.updatedAt).toLocaleString()}`}</small></p>
            </Box>
            <Divider variant="inset" component="li" />
          </Grid>
        </Container>
      </Card>
    </ThemeProvider>
  );
}
