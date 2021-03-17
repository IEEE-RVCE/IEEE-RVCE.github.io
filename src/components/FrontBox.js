import { Box, Grid, makeStyles, Typography,Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme=>({
    tell:{
        color:'#333'
    }
}));
export default function FrontBox(){
    const classes = useStyles();
    return (
        <Box >
            <Typography variant='h4' >IEEE RVCE</Typography>
            <br />

            <Grid container alignContent='center' alignItems='center' direction='row' justify='center' spacing={2}>
                <Grid item>
                <Button variant='outlined' size='large'>Something</Button>

                </Grid>
                <Grid item>
                    <Button variant='contained' color="primary" size='large'>Join US</Button>
                </Grid>
            </Grid>
            <br />
        </Box>
    );
}