import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import {hostname, ecats, images, execom, alumni} from '../links';
import {Link} from 'react-router-dom';
import AlumniAccordions from '../components/AlumniAccordions';
import SpacyDivider from '../components/SpacyDivider';

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

export default function COMSOCSocietyPage(props) {
    const classes = useStyles();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(hostname+'/api/event/cat/' + ecats.comsoc)
            .then(response => {
                setEvents(
                  response.data.events.sort((a, b) => {
                    return new Date(b.eventstart) - new Date(a.eventstart);
                  })
                );
            });
    }, []);

    return (
        <div className={classes.root}>
            <img src={images.landing.comsoc} id='soclanding' alt="Communication Society" style={{ maxHeight: "100vh", width: "100%" }} />
            <Container maxWidth='md'>
                <br />
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        To get the students community interested in Communication and networking together and help in developing the society by conducting research, education, invitation, projects and implementation of new ideas provided by the members of this Society.
                    </Typography>
                </Paper>
                <SpacyDivider color="rgb(61 144 142)"/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Mission
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        The IEEE RVCE Communication Society intends to help understand its members, the importance of Communication and develop a forum to share information related to it. 
                        The society provides an opportunity to its members, improving themselves in technical, non-technical and professional aspects by building the right network. 
                        The society provides a platform to exchange ideas amongst the members and experts in both academia and industry. 
                    </Typography>
                </Paper>
                <SpacyDivider color="rgb(61 144 142)"/>
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
                                        <Link to={"/events?ecat=" + ecats.comsoc} className={classes.link}>Click here for more events</Link>
                                    )
                                }
                            </Paper>
                            <SpacyDivider color="rgb(61 144 142)"/>
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
                            execom.comsoc.map((member) => (
                                <Grid item xs={12} md={4}>
                                    <Avatar name={member.name} position={member.position} src={member.image}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
                <AlumniAccordions members={alumni.comsoc} color="rgb(61 144 142)"/>
                <br/>
            </Container>
        </div>
    )
}

