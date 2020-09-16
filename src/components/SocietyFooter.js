import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Grid, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Instagram, LinkedIn, EmailOutlined} from '@material-ui/icons';

import {navs, societies, affinities} from '../links';

// Makes new style for footer
const useStyles = makeStyles((theme) => ({
    // The colour is horrendous but we can change that later. Padding to make the footer prominent.
    root: {
        backgroundColor: "#111111",
        padding: theme.spacing(6),
    },
    typography: {
        color: '#eeeeee',
    },
    link: {
        textDecoration: 'none',
        color: '#bbbbbb',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    body: {
        color: '#bbbbbb',
    },
    icon: {
        color: '#eeeeee',
    },
    iconbutton: {
        padding: 0,
    }
}))

export default function SocietyFooter(props) {
    const classes = useStyles()

    // Make a box holding the footer. Container filling the page. Add grid layout to make a responsive footer which looks good on phones too!
    return (
        <Box sm={12} className={classes.root} style={{padding: "18px", backgroundColor: "#000c41"}}>
            <Container maxWidth='xl' >
                <Grid container spacing={1} justify='space-evenly'>
                    <Grid item xs={12} md={6} lg={2} key={1}>
                        <Typography className={classes.typography} variant='h6'>
                            Reach Us Out At
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={2}>
                        <Link to='#' className={classes.link}>
                            <Typography variant='h6'>Email</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={2}>
                        <Link to='#' className={classes.link}>
                            <Typography variant='h6'>Twitter</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={2}>
                        <Link to='#' className={classes.link}>
                            <Typography variant='h6'>Insta</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={2}>
                        <Link to='#' className={classes.link}>
                            <Typography variant='h6'>Linkedin</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={2}>
                        <Link to='#' className={classes.link}>
                            <Typography variant='h6'>Git</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}