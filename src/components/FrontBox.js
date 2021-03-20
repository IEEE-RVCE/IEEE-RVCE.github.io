import { Box, Grid, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import {images} from '../links';

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
    },
    logoimage:{
        maxHeight:'12vh',
        maxWidth:'100%'
        
    },
    logoImageSmall:{
        width:'8rem'
    }
}));
export default function FrontBox() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.bigbadBackground}>
                <Grid container style={{ padding: '2rem' }} alignContent='center' justify='center'>
                    <Grid item>
                        {/* <Grid container direction='row' alignContent='center' justify='center'>
                            
                            {/* <Grid item>
                                <Typography style={{display:'block'}} variant='h4' align='baseline'>IEEE RVCE</Typography>
                            </Grid> 
                        </Grid> */}
                        <Box display={{ xs: 'none', sm: 'block' }}>
                        <img className={classes.logoimage} src={images.logos.ieee_rvce_new_white_big} alt='logo' />
                        </Box>
                        <Box display={{ xs: 'block', sm: 'none' }}>
                        <img className={classes.logoImageSmall} src={images.logos.ieee_rvce_new_white} alt='logo' />
                        </Box>

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