import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper} from '@material-ui/core';
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
    },
    grid: theme.grid,
}))

export default function CSSocietyPage(props) {
    const classes = useStyles();

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(hostname+'/api/event/cat/' + ecats.compsoc)
            .then(response => {
                setEvents(response.data.events)
            });
    }, []);

    return (
        <div className={classes.root}>
            <img src={images.landing.compsoc} id='soclanding' alt="Computer Society" style={{ maxHeight: "100vh", width: "100%" }} />
            <Container maxWidth='md'>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Vision
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        To impart knowledge pertaining to Computer Science and create a culture of continuous learning and innovation through research, development and experimentation while persevering to develop technology for the betterment of humanity and ensuring harmony within the community.
                    </Typography>
                </Paper>
                <SpacyDivider color="rgb(80 161 99)"/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Mission
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        <ul>
                            <li>To enable students to gain the skills needed to become responsible professionals and be more aware of the upcoming trends in computer science.</li>
                            <li>To inculcate a mindset that makes students inquisitive</li>
                            <li>To imbibe a sense of responsibility towards the technical and global community and fulfil the same by working towards building a collaborative network of like-minded     individuals</li>
                            <li>To apply observations and knowledge to community-driven sustainable projects</li>
                        </ul>
                    </Typography>
                </Paper>
                <SpacyDivider color="rgb(80 161 99)"/>
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
                                        <Link to={"/events?ecat=" + ecats.compsoc} className={classes.link}>Click here for more events</Link>
                                    )
                                }
                            </Paper>
                            <SpacyDivider color="rgb(80 161 99)"/>
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
                            execom.compsoc.map((member) => (
                                <Grid item xs={12} md={4}>
                                    <Avatar name={member.name} position={member.position} src={member.image}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
                <AlumniAccordions members={alumni.compsoc} color="rgb(80 161 99)"/>
                <br/>
            </Container>
        </div>
    )
}

