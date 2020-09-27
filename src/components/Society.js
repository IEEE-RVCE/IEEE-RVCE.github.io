import React, { useState, useEffect } from "react";
import {Container, Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import EventsCalendar from '../components/Calendar';
import Avatar from '../components/Avatar';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8),
    },
    paper: {
        padding: theme.spacing(4),
    },
    link: {
        textDecoration: 'none',
        color: '#00629B',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    carousel: {
        margin: "auto",
        paddingTop: theme.spacing(4),
    }
}))



export default function HomePage(props) {
    const classes = useStyles();
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.npms.io/v2/search?q=react')
            .then(response => console.log(response));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return(
        <React.Fragment>
            <Container maxWidth='xl' className={classes.root} styles={{paddingTop:"10px"}}>   
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h3'>
                            <strong>APPEALING CONTENT</strong>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                         Prop : {props.sname}
                        </Typography>
                    </Grid>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h4'>
                            <strong>Vision</strong>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <p>To impart knowledge pertaining to Computer Science and create a culture of continuous learning and innovation through research, development and experimentation while persevering to develop technology for the betterment of humanity and ensuring harmony within the community.</p>
                        </Typography>
                    </Grid><br/>
                    <Grid>
                        <Typography variant='h4'>
                            <strong>Mission</strong>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <li>To enable students to gain the skills needed to become responsible professionals and be more aware of the upcoming trends in computer science.</li>
                            <li>To inculcate a mindset that makes students inquisitive</li>
                            <li>To imbibe a sense of responsibility towards the technical and global community and fulfil the same by working towards building a collaborative network of like-minded     individuals</li>
                            <li>To apply observations and knowledge to community-driven sustainable projects</li>
                        </Typography>
                    </Grid>
                </Paper>
                {/* <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h3'>
                            <strong>Vision and Mission</strong>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <li>Eat</li>
                            <li>Sleep</li>
                            <li>Code</li>
                        </Typography>
                    </Grid>
                </Paper> */}
                <br/>
                {/* <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Events
                    </Typography>
                    <br/>
                    <EventsCalendar
                        toolbar={false}
                        defaultView="agenda"
                    />
                    <Link to='/calendar' className={classes.link}>Click here to view full calendar</Link>
                </Paper>
                <br/> */}
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        <strong>EVENTS</strong>
                    </Typography><br/>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={4}
                        gutter={20}
                        leftChevron={<button>{'<'}</button>}
                        rightChevron={<button>{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                        <Avatar/>
                    </ItemsCarousel>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
                    <Typography variant='h3'>
                        Exec Com
                    </Typography>
                    <br/>
                    <Grid container spacing={2} justify='center'>
                        <Grid item xs={12} md={3}>
                            <Avatar/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Avatar/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Avatar/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Avatar/>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h3'>
                            <strong>APPEALING CONTENT</strong>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                         Prop : {props.sname}
                        </Typography>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
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
