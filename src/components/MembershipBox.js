import { Box, Grid, makeStyles, Button } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import TOPOLOGY from 'vanta/dist/vanta.topology.min.js'
import GiveMeABreak from './GiveMeABreak';
import { HashLink } from 'react-router-hash-link';


const useStyles = makeStyles(theme => ({
    bigbutton: {
        padding: '.6rem 1.2rem',
    },
    noUnderline: {
        textDecoration: 'none'
    },
    bigbadBackground: {
        paddingTop: '35vh',
        height: '100vh',
    },
    bigbutton1: {
        background: `linear-gradient( -45deg, #fe8c00 30%, #f83600 90%)`,
        fontWeight: 'bold'
    },
    bigbutton2: {
        background: `linear-gradient( 45deg, #fe8c00 30%, #f83600 90%)`,
        fontWeight: 'bold'
    },
    logoimage: {
        maxHeight: '12vh',
        maxWidth: '100%'
    },
    logoImageSmall: {
        width: '8rem'
    }
}));

/**
 * Front big welcome box. Presents a Vanta background
 * @returns 
 */
export default function MembershipBox() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                // THREE: THREE,
                // el: ".s-page-1 .s-section-1 .s-section",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3be52e
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    const classes = useStyles();

    return (
        <>
            <Box className={classes.bigbadBackground} ref={myRef}>
                <Grid container alignContent='center' justify='center'>
                    <Grid item>

                        <Box>
                            <h1>
                                <strong style={{ color: "white", fontFamily: "Montserrat", fontSize: "4rem" }}>
                                    Membership
                                </strong>
                            </h1>
                        </Box>

                        <GiveMeABreak num={2} />
                    </Grid>
                    <Grid container alignItems='center' justify='center'>
                        <Grid item  >
                            <HashLink smooth to="#whyjoinieee" className={classes.noUnderline}>
                                <Button style={{ margin: '1rem' }} className={`${classes.bigbutton} ${classes.bigbutton2}`} variant='contained' color="primary" size='large'>Why Join IEEE?</Button>
                            </HashLink>

                        </Grid>
                        <Grid item >
                            <HashLink smooth to="#beamember" className={classes.noUnderline}>
                                <Button style={{ margin: '1rem' }} className={`${classes.bigbutton} ${classes.bigbutton2}`} variant='contained' color="primary" size='large'>Become A Member</Button>
                            </HashLink>
                        </Grid>
                    </Grid>
                </Grid><br /> <br /><br />
            </Box><br />
        </>
    );
}