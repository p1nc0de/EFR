import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useParams } from 'react-router-dom';

// const id = 1;
function CityNavbar() {
  const { id } = useParams();
  const navItems = [
    { Общая_информация: `/city/${id}/scores` },
    { Стоимость_проживания: `/city/${id}/cost` },
    { Люди: '/users' },
    { Отзывы: `/city/${id}/reviews` },
    { Фото: `/city/${id}/photos` }];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            EFR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} component={NavLink} to={`${Object.values(item)}`}>
                {Object.keys(item)}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CityNavbar;
