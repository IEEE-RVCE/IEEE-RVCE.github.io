import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import CELLS from 'vanta/dist/vanta.cells.min.js';
import GiveMeABreak from './GiveMeABreak';

const useStyles = makeStyles(theme => ({
  bigbutton: {
    padding: '.6rem 1.2rem',
  },
  noUnderline: {
    textDecoration: 'none',
  },
  bigbadBackground: {
    paddingTop: '35vh',
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
        CELLS({
          el: myRef.current,
          // THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x61efef,
          color2: 0x0,
          size: 0.2,
          speed: 4.3,
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
        <Grid
          container
          style={{ padding: '2rem' }}
          alignContent="center"
          justify="center"
        >
          <Grid item>
            <Box>
              <h1 style={{ paddingTop: '10%' }}>
                <strong
                  style={{
                    color: 'white',
                    fontFamily: 'Montserrat',
                    fontSize: '4rem',
                  }}
                >
                  Articles
                </strong>
              </h1>
            </Box>

            <GiveMeABreak num={2} />
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
    </>
  );
}
