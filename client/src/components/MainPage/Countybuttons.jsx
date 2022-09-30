import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Countybuttons() {
    return (
        // <Box sx={{ '& button': { m: 1 } }}>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
        >
            <Grid item>
                <Button component={NavLink} to='/' variant="contained" size="medium">
                    Лучшие города
                </Button>
            </Grid>
            <Grid item>
                <Button component={NavLink} to='/city/2' variant="contained" size="medium">
                    Грузия
                </Button>
            </Grid>
            <Grid item>
                <Button component={NavLink} to='/city/1' variant="contained" size="medium">
                    Турция
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="medium">
                    Вьетнам
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="medium">
                    Украина
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="medium">
                    Пох куда
                </Button>
            </Grid>
        </Grid >
    );
}
