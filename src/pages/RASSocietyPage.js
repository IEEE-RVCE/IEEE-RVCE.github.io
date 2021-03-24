import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import {hostname, ecats, images, execom, alumni} from '../links';
import AlumniAccordions from '../components/AlumniAccordions';

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

export default function RASSocietyPage(props) {
    const classes = useStyles();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(hostname+'/api/event/cat/' + ecats.ras)
            .then(response => {
                setEvents(response.data.events)
            });
    }, []);

    return (
        <div className={classes.root}>
            <img src={images.landing.ras} id='soclanding' alt="Robotics and Automation Society" style={{ maxHeight:"100vh", width: "100%" }} />
            <Container maxWidth='md'>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        Coming soon...
                    </Typography>
                </Paper>
                <br />
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Mission
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        Coming soon...     
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
                                        <Link to={"/events?ecat=" + ecats.ras} className={classes.link}>Click here for more events</Link>
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
                            execom.ras.map((member) => (
                                <Grid item xs={12} md={4}>
                                    <Avatar name={member.name} position={member.position} src={member.image}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
                <br/>
                <AlumniAccordions members={alumni.ras}/>
                <br/>
            </Container>
        </div>
    )
}

