import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

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
                <Button variant="contained" size="medium">
                    Грузия
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="medium">
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
                    Похуй куда
                </Button>
            </Grid>
        </Grid >
    );
}
