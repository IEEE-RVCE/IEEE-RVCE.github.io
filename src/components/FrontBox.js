import { Box, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    bigbutton: {
        padding: '.6rem 1.2rem',
    },
    bigbadBackground: {
        paddingTop: '25vh',
        height: '100vh',
        backgroundImage: 'url(assets/images/devs/Chirag_Bapat.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
}));
export default function FrontBox() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.bigbadBackground}>
                <Grid container style={{ padding: '6rem' }} alignContent='center' justify='center'>
                    <Grid item>
                        <Typography variant='h4' align='center'>IEEE RVCE</Typography>
                        <br /><br />
                        <Typography variant='body2' align='center'>Hello there</Typography>

                    </Grid>
                </Grid>
                <br />

                {/* <Container maxWidth='sm'>
                <Button className={classes.bigbutton} variant='outlined' size='large'>Something</Button>
                <Button className={classes.bigbutton} variant='contained' color="primary" size='large'>Join US</Button>

                </Container> */}
                <Grid container alignItems='center' justify='center'>
                    <Grid item  >
                        <Button style={{margin:'1rem'}} className={classes.bigbutton} variant='outlined' size='large'>Something</Button>

                    </Grid>
                    <Grid item >
                        <Button style={{margin:'1rem'}} className={classes.bigbutton} variant='contained' color="primary" size='large'>Join US</Button>
                    </Grid>
                </Grid>
                <br />
            </Box>
            <br />
        </>
    );
}