import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Container, Box, Grid} from '@material-ui/core';
import {LoremIpsum} from 'react-lorem-ipsum';

// Makes new style for footer
const useStyles = makeStyles((theme) => ({
    // The colour is horrendous but we can change that later. Padding to make the footer prominent.
    root: {
        backgroundColor: "#111111",
        padding: theme.spacing(6),
    },
    typography: {
        color: '#eeeeee',
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    return(
        // Make a box holding the footer. Container filling the page. Add grid layout to make a responsive footer which looks good on phones too!
        <Box sm={12} className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container spacing={3} justify='space-evenly'>
                    <Grid item xs={12} md={6} lg={3} key={1}>
                        <Typography className={classes.typography} variant='p'>
                            <LoremIpsum/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} key={2}>
                        <Typography className={classes.typography} variant='p'>
                            <LoremIpsum/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} key={3}>
                        <Typography className={classes.typography} variant='p'>
                            <LoremIpsum/>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>    
    )
}