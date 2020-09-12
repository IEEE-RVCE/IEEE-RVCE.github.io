import React from 'react';
import {Container, Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import HomeCarousel from '../components/Carousel'
import EventsCalendar from '../components/Calendar';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const useStyles = makeStyles((theme) => ({
    root: theme.root,
    container: theme.page,
    paper: {
        ...theme.paper,
        padding: theme.spacing(4)
    },
    link: {
        ...theme.link,
        color: localStorage.getItem('darkMode') === 'true' ? '#bbb':'#00629B',
    },
    carousel: {
        margin: "auto",
        paddingTop: theme.spacing(4),
    }
}))

export default function HomePage(props) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Container maxWidth='lg' className={classes.carousel}>
                <HomeCarousel images={carouselImages} />
            </Container>
            <Container maxWidth='md' className={classes.container}>   
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h3'>
                            Vision
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                        IEEE RVCE will be instrumental in facilitating the global outreach of IEEE 
                        by providing a platform for students to connect with professionals worldwide 
                        and develop their technical expertise, thus making a positive impact on the society
                        </Typography>
                    </Grid>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Grid>
                    <Typography variant='h3'>
                            What we do
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                        As members of a larger technical community,  IEEE RVCE aims to connect future engineers and researchers with industry experts and top academicians. 
                        We provide a platform for students to stay updated with today's research through webinars and technical talks by eminent professors and professionals. 
                        We also arrange workshops and Industrial visits that help students upgrade their skills to stay relevant in today's global market.
                        </Typography>
                    </Grid>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Upcoming Events
                    </Typography>
                    <br/>
                    <EventsCalendar
                        toolbar={false}
                        defaultView="agenda"
                    />
                    <Link to='/calendar' className={classes.link}>Click here to view full calendar</Link>
                </Paper>
            </Container>
        </div>
    )
}


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