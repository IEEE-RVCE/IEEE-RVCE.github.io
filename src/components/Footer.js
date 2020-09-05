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
    icon: {
        color: '#eeeeee',
    },
    iconbutton: {
        padding: 0,
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    // Make a box holding the footer. Container filling the page. Add grid layout to make a responsive footer which looks good on phones too!
    return (
        <Box sm={12} className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container spacing={1} justify='space-evenly'>
                    <Grid item xs={12} md={6} lg={2} key={1}>
                        <Typography className={classes.typography} variant='h6'>
                            Home Page
                        </Typography>
                        {
                            navs.map(({name, link}) => (
                                <Link to={link} className={classes.link}>
                                    <Typography variant='body1'>{name}</Typography>
                                </Link>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={2}>
                        <Typography className={classes.typography} variant='h6'>
                            Societies
                        </Typography>
                        {
                            societies.map(({name, link}) => (
                                <Link to={link} className={classes.link}>
                                    <Typography variant='body1'>{name}</Typography>
                                </Link>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} key={3}>
                        <Typography className={classes.typography} variant='h6'>
                            Affinities
                        </Typography>
                        {
                            affinities.map(({name, link}) => (
                                <Link to={link} className={classes.link}>
                                    <Typography variant='body1'>{name}</Typography>
                                </Link>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} key={4}>
                        <Typography className={classes.typography} variant='h6'>
                            Address:<br/>
                        </Typography>
                        <Typography style={{color: '#bbbbbb'}} variant='h6'>
                        Mysore Road, RV Vidyanikethan Post, Bengaluru-560059, Karnataka, India<br/>
                        </Typography>
                        <br/>
                        <Grid container justify='space-between'>
                            <IconButton href='https://instagram.com/ieee_rvce?igshid=1hbfgquvdu0yt' target='_blank' className={classes.iconbutton}>
                                <Instagram className={classes.icon} fontSize='large'/>
                            </IconButton>
                            <IconButton href='https://www.linkedin.com/company/ieee-rvce' target='_blank' className={classes.iconbutton}>
                                <LinkedIn className={classes.icon} fontSize='large'/>
                            </IconButton>
                            <IconButton href='mailto:ieeervce@rvce.edu.in' target='_blank' className={classes.iconbutton}>
                                <EmailOutlined className={classes.icon} fontSize='large'/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}