import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Cards({ city }) {
    return (
        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >

            <Card component="li" sx={{ minWidth: 300, flexGrow: 1, }}>
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
                        {city.name}
                    </Typography>f
                </CardContent>
            </Card>
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                            src="https://assets.codepen.io/6093409/river.mp4"
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
                <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
                    <Typography
                        level="h6"
                        fontWeight="lg"
                        textColor="#fff"
                        mt={{ xs: 12, sm: 18 }}
                    >
                        Video
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
