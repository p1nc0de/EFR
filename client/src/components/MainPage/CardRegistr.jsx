import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActions, Input } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function CardRegistr() {

    return (
        <Box>
            <Card sx={{ maxWidth: 300, bgcolor: 'text.disabled' }}>
                <CardMedia style={{ padding: '5px', borderRadius: '10px' }}
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
                    <Button component={NavLink} to='/login' variant="contained" color='error' size="sm" sx={{ textDecoration: 'none' }}>
                        Войти
                    </Button>
                    <Button component={NavLink} to='/signup' variant="contained" color='error' size="sm" sx={{ textDecoration: 'none' }}>
                        Зарегаться
                    </Button>
                </CardActions>

            </Card >
        </Box>
    );
}


