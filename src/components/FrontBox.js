import { Box, Grid, makeStyles, Typography,Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme=>({
    bigbutton:{
        padding:'.6rem 1.2rem'
    },
    bigbadBackground:{
        backgroundImage:'url(assets/images/devs/Chirag_Bapat.jpg)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }
}));
export default function FrontBox(){
    const classes = useStyles();
    return (
        <>
        <Box className={classes.bigbadBackground}>
            <Grid container style={{padding:'6rem'}} alignContent='center' justify='center'>
                <Grid item>
                    <Typography variant='h4' >IEEE RVCE</Typography>

                </Grid>
            </Grid>
            <br />

            <Grid container alignContent='center' alignItems='center' direction='row' justify='center' spacing={2}>
                <Grid item>
                <Button className={classes.bigbutton} variant='outlined' size='large'>Something</Button>

                </Grid>
                <Grid item>
                    <Button className={classes.bigbutton} variant='contained' color="primary" size='large'>Join US</Button>
                </Grid>
            </Grid>
            <br />
        </Box>
        <br />
        </>
    );
}