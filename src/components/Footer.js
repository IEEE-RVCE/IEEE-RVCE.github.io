import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Grid, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Instagram, LinkedIn, EmailOutlined} from '@material-ui/icons';

import {navs, societies, affinities} from '../links';

// Makes new style for footer
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#111111",
        padding: theme.spacing(6),
        borderTop: localStorage.getItem('darkMode')?'1px solid #eee':'none'
    },
    typography: {
        color: '#eeeeee',
    },
    link: theme.link,
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

export default function Footer(props) {
    const classes = useStyles()

    // Make a box holding the footer. Container filling the page. Add grid layout to make a responsive footer which looks good on phones too!
    return (
        <Box sm={12} className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container spacing={1} justify='space-evenly'>
                    <Grid item xs={12} md={6} lg={2} key={1}>
                        <Typography className={classes.typography} variant='h6'>
                            Useful links
                        </Typography>
                        {
                            navs.map(({name, link, isMenu}) => {
                                if(!isMenu) {
                                    return(
                                        <Link to={link} className={classes.link}>
                                            <Typography variant='body1'>{name}</Typography>
                                        </Link>
                                    )
                                }
                                else {
                                    return <React.Fragment/>
                                }
                            })
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
                    <Grid item xs={12} md={6} lg={3} key={4} style={{paddingRight: 60}}>
                        <Typography className={classes.typography} variant='h6'>
                            Address:<br/>
                        </Typography>
                        <Typography className={classes.body} variant='body1'>
                        Mysore Road, RV Vidyanikethan Post, Bengaluru-560059, Karnataka, India<br/>
                        </Typography>
                        <br/>
                        <Grid container justify='space-between' style={{paddingRight: 60}}>
                            <IconButton href='https://instagram.com/ieee_rvce?igshid=1hbfgquvdu0yt' target='_blank' rel='noopener norefferer' className={classes.iconbutton}>
                                <Instagram className={classes.icon} fontSize='large'/>
                            </IconButton>
                            <IconButton href='https://www.linkedin.com/company/ieee-rvce' target='_blank' rel='noopener norefferer' className={classes.iconbutton}>
                                <LinkedIn className={classes.icon} fontSize='large'/>
                            </IconButton>
                            <IconButton href='mailto:ieeervce@rvce.edu.in' target='_blank' rel='noopener norefferer' className={classes.iconbutton}>
                                <EmailOutlined className={classes.icon} fontSize='large'/>
                            </IconButton>
                        </Grid>
                        <br/>
                        <Typography className={classes.body} variant='body1'>
                            &copy; IEEE RVCE student chapter. All Rights Reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}