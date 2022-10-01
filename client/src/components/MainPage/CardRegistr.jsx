import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Input } from '@mui/material';

export default function CardRegistr() {

    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="Надо зарегаться"
                    height="200"
                    image="/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07e3Q3akZD5pQRIGO6_C6jqZJb7Hvf_QXYA&usqp=CAU"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Зарегистрируйся
                    </Typography>
                </CardContent>
                {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Input
                        size="md"
                        placeholder="email@mui.com"
                        endDecorator={
                            <Button variant="soft" size="sm">
                                Subscribe
                            </Button>
                        }
                    />
                </Box> */}
            </Card>
        </Box>
    );
}


