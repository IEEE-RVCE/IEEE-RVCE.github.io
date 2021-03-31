import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import {hostname, ecats, images, execom, alumni} from '../links';
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

export default function SPSSocietyPage(props) {
    const classes = useStyles();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(hostname+'/api/event/cat/' + ecats.sps)
            .then(response => {
                setEvents(response.data.events)
            });
    }, []);

    return (
        <div className={classes.root}>
            <img src={images.landing.sps} id='soclanding' alt="Signal Processing Society" style={{ maxHeight: "100vh", width: "100%" }} />
            <Container maxWidth='md'>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                    To aid student researchers in the field of signal processing by providing them a platform to be aware of the latest developments in the field through IEEE resources and to also provide arenas for development of projects and prototypes based on intensive research. 
                    </Typography>
                </Paper>
                <SpacyDivider color="rgb(153 221 227)"/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Mission
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        To conduct workshops, webinars and conferences under the banner of the chapter to propagate the importance and recent developments in the field of signal processings, and to create a collaborative research environment in the field.
                    </Typography>
                </Paper>
                <SpacyDivider color="rgb(153 221 227)"/>
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
                                        <Link to={"/events?ecat=" + ecats.sps} className={classes.link}>Click here for more events</Link>
                                    )
                                }
                            </Paper>
                            <SpacyDivider color="rgb(153 221 227)"/>
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
                            execom.sps.map((member) => (
                                <Grid item xs={12} md={4}>
                                    <Avatar name={member.name} position={member.position} src={member.image}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
                <AlumniAccordions members={alumni.sps} color="rgb(153 221 227)"/>
                <br/>
            </Container>
        </div>
    )
}

