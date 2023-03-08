import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import { hostname, ecats, images, execom, alumni } from '../links';
import AlumniAccordions from '../components/AlumniAccordions';
import SpacyDivider from '../components/SpacyDivider';

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

export default function WIEAffinityPage(props) {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(hostname + '/api/event/cat/' + ecats.wie).then(response => {
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
        src={images.landing.wie}
        id="soclanding"
        alt="Women in Engineering"
        style={{ maxHeight: '100vh', width: '100%' }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
            To be a key for empowering women through professional education
            integrated with values and character in order to face the global
            competition in the new era of technology.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(128 58 120)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
            Diversity of thoughts, perspectives, and culture are needed as much
            in Engineering as in any other field. Surround yourself with people
            who support you and get involved in technology.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(128 58 120)" />
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
                <Link to={'/events?ecat=' + ecats.wie} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="rgb(128 58 120)" />
          </>
        )}
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid container spacing={2} justify="center">
            {execom.wie.map(member => (
              <Grid item xs={12} md={4}>
                <Avatar
                  name={member.name}
                  position={member.position}
                  src={member.image}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <AlumniAccordions members={alumni.wie} color="rgb(128 58 120)" />
        <br />
      </Container>
    </div>
  );
}
