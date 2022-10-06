import React from 'react';
import { Box, CardActions, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import LockPersonIcon from '@mui/icons-material/LockPerson';
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

export default function TelegramButton({ user, authUser }) {
  // Modal logic
  const [openR, setOpenR] = React.useState(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);

  return (
    <>
      {authUser?.id
        ? (
          <CardActions>
            <Button
              target="_blank"
              href={`tg://resolve?domain=${user?.telegram}`}
              variant="contained"
              color="error"
              size="sm"
              sx={{
                textDecoration: 'none', margin: '1rem', width: 330, color: 'w', '&:hover': { backgroundColor: 'red', color: 'black' },
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
              onClick={handleOpenR}
              variant="contained"
              color="error"
              size="sm"
              sx={{
                textDecoration: 'none', margin: '1rem', width: 330, '&:hover': { backgroundColor: 'red', color: 'black' },
              }}
              type="button"
            >
              Чтобы написать, зарегистрируйтесь
              {' '}
              {' '}
              <LockPersonIcon color="white" fontSize="small" />
            </Button>
          </CardActions>
        )}
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
    </>
  );
}
