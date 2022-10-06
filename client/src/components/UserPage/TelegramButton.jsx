import React from 'react';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import LockPersonIcon from '@mui/icons-material/LockPerson';

export default function TelegramButton({ user, authUser }) {
  console.log(user.telegram);
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
              component={Link}
              target="_blank"
              to="/login"
              variant="contained"
              color="error"
              size="sm"
              sx={{
                textDecoration: 'none', margin: '1rem', width: 330, '&:hover': { backgroundColor: 'red', color: 'black' },
              }}
              type="button"
            >
              Чтобы написать, авторизуйтесь
              {' '}
              {' '}
              <LockPersonIcon color="white" fontSize="small" />
            </Button>
          </CardActions>
        )}
    </>
  );
}
