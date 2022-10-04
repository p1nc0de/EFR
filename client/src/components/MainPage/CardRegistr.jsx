import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, CardActions, Modal } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LoginPage from '../Login';

const style = {
  position: 'absolute',
  bgcolor: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  borderRadius: '10%',
  boxShadow: 24,
};

export default function CardRegistr() {
// Modal logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Card sx={{ maxWidth: 300, bgcolor: 'text.disabled' }}>
        <CardMedia
          style={{ padding: '5px', borderRadius: '10px' }}
          component="img"
          alt="Надо зарегаться"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjEw5JZ9OZd3xQx6bd2ENSgMnACsS7xt2Rw&usqp=CAU"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h6" component="div">
                        Зарегистрируйся
                    </Typography> */}
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none' }}>
            Войти
          </Button>
          <Button component={NavLink} to="/signup" variant="contained" color="error" size="sm" sx={{ textDecoration: 'none' }}>
            Зарегаться
          </Button>
        </CardActions>
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

      </Card>
    </Box>
  );
}
