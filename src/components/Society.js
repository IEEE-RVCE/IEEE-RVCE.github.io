import React from 'react';
import {Container, Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import EventsCalendar from '../components/Calendar';
import Avatar from '../components/Avatar'

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

    return(
        <React.Fragment>
            <Container maxWidth='xl' className={classes.root} styles={{paddingTop:"10px"}}>   
                <Paper className={classes.paper}>
                    <Grid>
                        <Typography variant='h3'>
                            Home
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
                        <Typography variant='h3'>
                            About Us(Vision and Mission)
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <li>Eat</li>
                            <li>Sleep</li>
                            <li>Code</li>
                        </Typography>
                    </Grid>
                </Paper>
                <br/>
                <Paper className={classes.paper}>
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
