import { Box, Grid, makeStyles, Button } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import { images } from '../links';
import { Link } from 'react-router-dom';
import GLOBE from 'vanta/dist/vanta.globe.min.js';
import GiveMeABreak from './GiveMeABreak';

const useStyles = makeStyles(theme => ({
  bigbutton: {
    padding: '.6rem 1.2rem',
  },
  noUnderline: {
    textDecoration: 'none',
  },
  bigbadBackground: {
    paddingTop: '25vh',
    height: '100vh',
  },
  bigbutton1: {
    background: `linear-gradient( -45deg, #fe8c00 30%, #f83600 90%)`,
    fontWeight: 'bold',
  },
  bigbutton2: {
    background: `linear-gradient( 45deg, #fe8c00 30%, #f83600 90%)`,
    fontWeight: 'bold',
  },
  logoimage: {
    maxHeight: '12vh',
    maxWidth: '100%',
  },
  logoImageSmall: {
    width: '8rem',
  },
}));

/**
 * Front big welcome box. Presents a Vanta background
 * @returns
 */
export default function FrontBox() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          // THREE: THREE,
          color: 0x12c48c,
          color2: 0x00629b, //0xb30808,//0x3044ce,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x111111, //0x0//0x15082c
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.bigbadBackground} ref={myRef}>
        <Grid container style={{ padding: '2rem' }} alignContent="center" justifyContent="center">
          <Grid item>
            <Box display={{ xs: 'none', sm: 'block' }}>
              <img className={classes.logoimage} src={images.logos.ieee_rvce_new_white_big} alt="logo" />
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }}>
              <img className={classes.logoImageSmall} src={images.logos.ieee_rvce_new_white} alt="logo" />
            </Box>

            <GiveMeABreak num={2} />
          </Grid>
        </Grid>
        <br />

        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Link to="/about" className={classes.noUnderline}>
              <Button
                style={{ margin: '1rem' }}
                className={`${classes.bigbutton} ${classes.bigbutton1}`}
                variant="contained"
                size="large"
              >
                About Us
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/events" className={classes.noUnderline}>
              <Button
                style={{ margin: '1rem' }}
                className={`${classes.bigbutton} ${classes.bigbutton2}`}
                variant="contained"
                color="primary"
                size="large"
              >
                Events
              </Button>
            </Link>
          </Grid>
        </Grid>
        <br />
      </Box>
      <br />
    </>
  );
}
