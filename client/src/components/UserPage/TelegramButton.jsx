import React from 'react';
import { Box, CardActions, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LoginPage from '../Login';

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

export default function TelegramButton({ user, authUser }) {
  // Modal logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {authUser?.id
        ? (
          <CardActions>
            <Button
              // component={Link}
              target="_blank"
              // onClick={() => window.location.reload()}
              href={`tg://resolve?domain=${user?.telegram}`}
              variant="contained"
              color="error"
              size="sm"
              sx={{
                textDecoration: 'none', margin: '1rem', width: 330, color: 'w', '&:hover': { backgroundColor: 'white' },
              }}
              type="button"
            >
              Связаться в Telegram
              {' '}
              {' '}
              <TelegramIcon color="white" fontSize="small" />
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="error"
              size="sm"
              sx={{ textDecoration: 'none', margin: '1rem', width: 330 }}
              type="button"
            >
              Чтобы написать, авторизуйтесь
              {' '}
              {' '}
              <LockPersonIcon color="white" fontSize="small" />
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
    </>
  );
}
