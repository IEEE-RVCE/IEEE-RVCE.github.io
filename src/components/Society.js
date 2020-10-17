import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import axios from 'axios';
import EventCard from '../components/EventCard';
import HomeCarousel from '../components/Carousel';
import Collapsible from 'react-collapsible';
import stylesT from '../components/type.module.css'

const prefersDarkMode = localStorage.getItem('darkMode') === 'true'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: prefersDarkMode?'#303030':"#FFF"
    },
    container: theme.page,
    paper: {
        ...theme.paper,
        padding: theme.spacing(4)
    },
    // link: {
    //     ...theme.link,
    //     color: localStorage.getItem('darkMode') === 'true' ? '#bbb' : '#00629B',
    //     '&:hover': {
    //         textDecoration: 'underline',
    //     }
    // },
    carousel: {
        margin: "auto",
        paddingTop: theme.spacing(4),
    }
}))

const carouselImages = [
    {
        src: "/assets/images/session1.png",
        label: "session1"
    },
    {
        src: "/assets/images/session2.png",
        label: "session2"
    },
    {
        src: "/assets/images/session3.jpg",
        label: "session3"
    }
];



export default function HomePage(props) {
    const classes = useStyles();

    // useEffect(() => {
    //     // GET request using axios inside useEffect React hook
    //     axios.get('https://api.npms.io/v2/search?q=react')
    //         .then(response => console.log(response));

    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    return (
        <React.Fragment>
            <Container maxWidth='xl' className={classes.root}>
                {/* <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h5'>
                            <span className={stylesT.typewriter}>
                                <h1>{props.sname}</h1>
                            </span>
                        </Typography>
                        <br />
                    </Grid>
                </Paper>
                <br /> */}
                <Grid>
                    <Grid container spacing={2} justify='center'>
                        <Grid item xs={12} md={8}><br />
                            {/* <Paper className={classes.paper}> */}
                            <div style={{ paddingRight: "15%" }}>
                                <   Typography variant='h4'>
                                    <strong>Vision</strong>
                                </Typography>
                                <Typography variant='body1'>
                                    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>To impart knowledge pertaining to Computer Science and create a culture of continuous learning and innovation through research, development and experimentation while persevering to develop technology for the betterment of humanity and ensuring harmony within the community.</p>
                                </Typography>
                            </div>

                            {/* </Paper> */}
                            <br /><br />
                            {/* <Paper className={classes.paper}> */}
                            <div style={{ paddingRight: "15%" }}>
                                <Typography variant='h4'>
                                    <strong>Mission</strong>
                                </Typography><br />
                                <Typography variant='body1'>
                                    <ul>
                                        <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To enable students to gain the skills needed to become responsible professionals and be more aware of the upcoming trends in computer science.</li>
                                        <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To inculcate a mindset that makes students inquisitive</li>
                                        <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To imbibe a sense of responsibility towards the technical and global community and fulfil the same by working towards building a collaborative network of like-minded     individuals</li>
                                        <li style={{ textAlign: "justify", textJustify: "inter-word" }}>To apply observations and knowledge to community-driven sustainable projects</li>
                                    </ul>

                                </Typography>
                            </div>

                            {/* </Paper> */}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper className={classes.paper}>
                                <   Typography variant='h5'>
                                    <strong>What do we do?</strong>
                                </Typography>
                                <Container maxWidth='lg' className={classes.carousel}>
                                    <HomeCarousel images={carouselImages} />
                                </Container>
                                <Typography variant='body1'><br />
                                    <li>Meetings</li>
                                    <li>Meetings</li>
                                    <li>Meetings</li>
                                    <li>Meetings</li>
                                    <li>Repeat</li>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br />

                </Grid>
                <Typography variant='h4'>
                    <strong>EVENTS</strong>
                </Typography><br />
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <EventCard />
                    </Grid>
                </Grid><br />
                <a href="#" style={{ float: "right", textDecoration: "none" }}>Click here for more events</a>
                {/* </Paper> */}
                <br />
                {/* <Paper className={classes.paper}> */}
                <Typography variant='h4'>
                    <strong>ExeCom</strong>
                </Typography>
                <br />
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Avatar />
                    </Grid>
                </Grid>
                {/* </Paper> */}
                <br /><br />
                <Typography variant="h4">
                    <strong>Additional Resources</strong>
                </Typography><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6" >
                        <Collapsible trigger="Conferences" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Typography>
                </Paper><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6">
                        <a><Collapsible trigger="Competitions" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                        </a>
                    </Typography>
                </Paper><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6">
                        <Collapsible trigger="Certifications" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Typography>
                </Paper><br/>
            </Container>
        </React.Fragment>
    )
}

