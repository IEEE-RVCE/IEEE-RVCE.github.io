import { Box, Grid, makeStyles,  Button } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import { images } from '../links';
// import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js'
const useStyles = makeStyles(theme => ({
    bigbutton: {
        padding: '.6rem 1.2rem',
    },
    bigbadBackground: {
        paddingTop: '25vh',
        height: '100vh',
        // backgroundImage: 'url(assets/images/devs/Chirag_Bapat.jpg)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
    },
    bigbutton1:{
        background:`linear-gradient( -45deg, #fe8c00 30%, #f83600 90%)`,
        fontWeight:'bold'
    },
    bigbutton2:{
        background:`linear-gradient( 45deg, #fe8c00 30%, #f83600 90%)`,
        fontWeight:'bold'
    },
    logoimage: {
        maxHeight: '12vh',
        maxWidth: '100%'

    },
    logoImageSmall: {
        width: '8rem'
    }
}));
export default function FrontBox() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(GLOBE({
                el: myRef.current,
                // THREE: THREE,
                color:0x12c48c,
                color2:0x00629B,//0xb30808,//0x3044ce,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x111111//0x0//0x15082c
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    const classes = useStyles();

    return (
        <>
            <Box className={classes.bigbadBackground}  ref={myRef}>
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
                        {/* <Typography variant='body2' align='center'>Hello there</Typography> */}

                    </Grid>
                </Grid>
                <br />

                {/* <Container maxWidth='sm'>
                <Button className={classes.bigbutton} variant='outlined' size='large'>Something</Button>
                <Button className={classes.bigbutton} variant='contained' color="primary" size='large'>Join US</Button>

                </Container> */}
                <Grid container alignItems='center' justify='center'>
                    <Grid item  >
                        <Button style={{ margin: '1rem' }} className={`${classes.bigbutton} ${classes.bigbutton1}`} variant='contained' size='large'>About Us</Button>

                    </Grid>
                    <Grid item >
                        <Button style={{ margin: '1rem' }} className={`${classes.bigbutton} ${classes.bigbutton2}`} variant='contained' color="primary" size='large'>Events</Button>
                    </Grid>
                </Grid>
                <br />
            </Box>
            <br />
        </>
    );
}