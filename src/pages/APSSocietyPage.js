import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import {hostname, ecats, images, execom} from '../links';

const useStyles = makeStyles((theme) => ({
    root: theme.root,
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

export default function APSSocietyPage(props) {
    const classes = useStyles();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(hostname+'/api/event/cat/' + ecats.aps)
            .then(response => {
                setEvents(response.data.events)
            });
    }, []);

    return (
        <div className={classes.root}>
            <img src={images.landing.aps} id='soclanding' alt="Antenna Propogation Society" style={{ width: "100%", maxHeight: "100vh" }} />
            <Container maxWidth='md'>
                <br />
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        To instil excellent and broadly accessible concepts and ideals of the Antennas and Propagation domain empowering the professional development of its members and the society.
                    </Typography>
                </Paper>
                <br />
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Mission
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        <ul>
                            <li>To nurture the members of the society with relevant technical knowledge with respect to the Antennas and Propagation Domain.</li>
                            <li>To instil excellence in the domain of Antenna’s specifically with regard to their analysis and design.</li>
                            <li>To provide an active platform for the members of the society to exchange, challenge and encourage new ideas.</li>
                            <li>To ensure the members of the society imbibe skills relevant and required by the society and actively contribute to the same.</li>
                            <li>To guarantee the proficiency of the society members and to ensure overall professional development by conducting Webinars, Workshops and Distinguished lectures.</li>
                        </ul>
                    </Typography>
                </Paper>
                <br />
                {
                    events.length!==0 && (
                        <>
                            <Paper className={classes.paper}>
                                <Typography variant='h3'>
                                    Events
                                </Typography><br />
                                <Grid container spacing={2} justify='center'>
                                    {
                                        events.slice(0,3).map((item) => {
                                            return(
                                            <Grid item xs={12} md={4}>
                                                <EventCard event={item}/>
                                            </Grid>
                                            )
                                        })
                                    }
                                </Grid><br />
                                {
                                    events.length>=4 && (
                                        <Link to={"/events?ecat=" + ecats.aps} className={classes.link}>Click here for more events</Link>
                                    )
                                }
                            </Paper>
                            <br />
                        </>
                    )
                }
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Executive Committee
                    </Typography>
                    <br />
                    <Grid container spacing={2} justify='center'>
                        {
                            execom.aps.map((member) => (
                                <Grid item xs={12} md={4}>
                                    <Avatar name={member.name} position={member.position} src={member.image}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
                <br/>
            </Container>
        </div>
    )
}

