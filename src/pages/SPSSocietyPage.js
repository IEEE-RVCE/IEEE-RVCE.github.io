import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import { isMobile } from 'react-device-detect';
import Collapsible from 'react-collapsible';
import {hostname} from '../links';

const prefersDarkMode = localStorage.getItem('darkMode') === 'true'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: prefersDarkMode ? '#303030' : "#FFF"
    },
    container: theme.page,
    paper: {
        ...theme.paper,
        padding: theme.spacing(4)
    },
    link: {
        ...theme.link,
        float: "right", 
        textDecoration: "none",
    },
    carousel: {
        margin: "auto",
        paddingTop: theme.spacing(4),
    }
}))

export default function SPSSocietyPage(props) {
    const classes = useStyles();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(hostname+'/api/event')
            .then(response => {
                setEvents(response.data.events)
            });
    }, []);

    return (
        <React.Fragment>
            <img src="/assets/images/SignalProcessing.png" style={{ maxHeight: "100vh", width: "100%" }} />
            <Container maxWidth='xl' className={classes.root}><br />
                <div>
                    <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <strong>Vision</strong>
                    </Typography>
                    <Typography variant='body1' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>To aid student researchers in the field of signal processing by providing them a platform to be aware of the latest developments in the field through IEEE resources and to also provide arenas for development of projects and prototypes based on intensive research. </p>
                    </Typography>
                </div>
                <br />
                {/* <Paper className={classes.paper}> */}
                <div>
                    <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                        <strong>Mission</strong>
                    </Typography>
                    <Typography variant='body1'>
                        <p style={{ textAlign: "justify", textJustify: "inter-word" }}>To conduct workshops, webinars and conferences under the banner of the chapter to propagate the importance and recent developments in the field of signal processings, and to create a collaborative research environment in the field</p>
                    </Typography>
                </div>

                {/* </Paper> */}


                <br />
                <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
                    <strong>EVENTS</strong>
                </Typography><br />
                <Grid container spacing={2} justify='center'>
                    {
                        events.slice(0,4).map((item) => {
                            return(
                            <Grid item xs={12} md={3}>
                                <EventCard event={item}/>
                            </Grid>
                            )
                        })
                    }
                </Grid><br />
                <Link to="/events" className={classes.link}>Click here for more events</Link>
                {/* </Paper> */}
                <br />
                {/* <Paper className={classes.paper}> */}
                <Typography variant='h4' style={{ textAlign: (isMobile) ? "center" : "" }}>
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
                <Typography variant="h4" style={{ textAlign: (isMobile) ? "center" : "" }}>
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
                        <Collapsible trigger="Competitions" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Typography>
                </Paper><br />
                <Paper className={classes.paper} style={{ padding: "16px 32px", cursor: "pointer" }}>
                    <Typography variant="h6">
                        <Collapsible trigger="Certifications" triggerStyle={{ fontWeight: "bold" }}>
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Typography>
                </Paper><br />
            </Container>
        </React.Fragment>
    )
}

