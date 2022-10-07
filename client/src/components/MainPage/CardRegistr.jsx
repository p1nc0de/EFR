import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, CardActions, Modal } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '../Login';
import { logoutUserAsync } from '../../redux/actions/authActions';
import Signup from '../Signup';

const style = {
  position: 'absolute',
  bgcolor: '#2e2e36',
  color: '#35d8ad',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #2e2e36',
  borderRadius: '10%',
  boxShadow: 24,
  opacity: 0.85,

};

export default function CardRegistr() {
  // Modal logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal logic Registration
  const [openR, setOpenR] = React.useState(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);

  const authUser = useSelector((store) => store.authUser);
  const dispatch = useDispatch();

  return (
    <Box>
      <Card sx={{ maxWidth: 300, bgcolor: 'text.disabled' }}>
        <CardMedia
          style={{ padding: '5px', borderRadius: '10px' }}
          component="img"
          alt="Надо зарегаться"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjEw5JZ9OZd3xQx6bd2ENSgMnACsS7xt2Rw&usqp=CAU"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h6" component="div">
                        Зарегистрируйся
                    </Typography>
        </CardContent> */}
        {authUser?.id ? (
          <CardActions>
            <Button component={NavLink} to={`/users/${authUser.id}`} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none', margin: '1rem', '&:hover': { backgroundColor: 'red', color: 'black' } }}>
              Личный кабинет
            </Button>
            <Button onClick={() => dispatch(logoutUserAsync())} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none', margin: '1rem', '&:hover': { backgroundColor: 'red', color: 'black' } }}>
              Выйти
            </Button>
          </CardActions>
        )
          : (
            <CardActions>
              <Button onClick={handleOpen} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none', '&:hover': { backgroundColor: 'red', color: 'black' } }}>
                Войти
              </Button>
              <Button onClick={handleOpenR} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none', margin: '1rem', '&:hover': { backgroundColor: 'red', color: 'black' } }}>
                Зарегистрироваться
              </Button>
            </CardActions>
          )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LoginPage setOpen={setOpen} />
          </Box>
        </Modal>

        <Modal
          open={openR}
          onClose={handleCloseR}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Signup setOpenR={setOpenR} />
          </Box>
        </Modal>

      </Card>
    </Box>
  );
}
