import React from 'react';

import {Container, Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

import EventsCalendar from '../components/Calendar';

import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
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
    }
}))

export default function HomePage(props) {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Container maxWidth='md' className={classes.root}>
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
                        {lorem.generateParagraphs(1)}
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
        </React.Fragment>
    )
}