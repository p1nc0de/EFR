import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';

export default function Cards({ city }) {
    return (
        <Link to={`/city/${city.id}/reviews`}>
            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0.5 }}
            >
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1, minHeight: 300, maxHeight: 300 }}>
                    <CardCover>
                        <img
                            src={city.photo}
                            srcSet={city.photo}
                            // srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                            alt={`${city.name}`}

                        />
                    </CardCover>
                    <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
                        <Typography
                            level="h6"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 18 }}
                        >
                            <p>{city.name}</p>
                            <p>{`Лучший район: ${city.best_nbh}`}</p>
                            <p>{`Неплохой район: ${city.upcoming_nbh ? city.upcoming_nbh : 'такого нет'}`}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Box >
        </Link>
    );
}
