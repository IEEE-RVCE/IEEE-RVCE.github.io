import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import EventCard from '../components/EventCard';
import { hostname, ecats, images, alumni } from '../links';
import AlumniAccordions from '../components/AlumniAccordions';
import SpacyDivider from '../components/SpacyDivider';
import SocietyExecom from '../components/SocietyExecom';

const useStyles = makeStyles(theme => ({
  root: theme.root,
  container: theme.page,
  paper: {
    ...theme.paper,
    padding: theme.spacing(4),
  },
  link: {
    ...theme.link,
    float: 'right',
    textDecoration: 'none',
  },
  carousel: {
    margin: 'auto',
    paddingTop: theme.spacing(4),
  },
}));

export default function RASSocietyPage(props) {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(hostname + '/api/event/cat/' + ecats.ras).then(response => {
      setEvents(
        response.data.events.sort((a, b) => {
          return new Date(b.eventstart) - new Date(a.eventstart);
        })
      );
    });
  }, []);

  return (
    <div className={classes.root}>
      <img
        src={images.landing.ras}
        id="soclanding"
        alt="Robotics and Automation Society"
        style={{ maxHeight: '100vh', width: '100%' }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
            To inspire and encourage students to use and enrich their imagination and engineering abilities through
            robotics and automation, in order to instil technological skills, teamwork, and leadership, by engaging them
            in exhilarating mentor-based activities that develop engineering skills, inspire innovation, encourage
            creativity and promote well-rounded life skills such as self-confidence, communication and leadership. To
            inculcate the skill of design and creativity in members through developing hardware and actual prototypes
            leading to groundbreaking research in the field of Robotics and Automation.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(12 104 171)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
            To conduct workshops, competitions, seminars and conferences under the banner of the chapter to inspire and
            educate on the importance of robotics and automation, as well as, imbibing technical skills suited to recent
            technological developments in the field of robotics.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(12 104 171)" />
        {events.length !== 0 && (
          <>
            <Paper className={classes.paper}>
              <Typography variant="h3">Events</Typography>
              <br />
              <Grid container spacing={2} justify="center">
                {events.slice(0, 3).map(item => {
                  return (
                    <Grid item xs={12} md={4}>
                      <EventCard event={item} />
                    </Grid>
                  );
                })}
              </Grid>
              <br />
              {events.length >= 4 && (
                <Link to={'/events?ecat=' + ecats.ras} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="rgb(12 104 171)" />
          </>
        )}
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <SocietyExecom sid = {ecats.ras} />
        </Paper>
        <AlumniAccordions members={alumni.ras} color="rgb(12 104 171)" />
        <br />
      </Container>
    </div>
  );
}
