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

export default function AESSSSocietyPage(props) {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(hostname + '/api/event/cat/' + ecats.aess).then(response => {
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
        src={images.landing.aess}
        id="soclanding"
        alt="Aerospace and Electronics Society"
        style={{ width: '100%', maxHeight: '100vh' }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
          The vision of the AESS is to be essential to the worldwide technical community and be recognized for outstanding contributions
           in the fields of aerospace and electronic systems as demonstrated through the Society’s products, service and offerings in the
            areas of conferences, publications, education, technical operations, industry relations, and member services.
            </Typography>
        </Paper>
        <SpacyDivider color="rgb(110 110 193)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
          The mission of the AESS is to provide a responsive and relevant professional society that attracts, engages, aids, and retains
           a diverse set of members (age, culture, community – theoretical, managerial and applications) worldwide in the areas of our
            fields of interest as defined in our constitution. AESS will accomplish this through technical, chapter and society activities 
            in the areas of conferences, publications, education, technical operations, industry relations, and member services.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(110 110 193)" />
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
                <Link to={'/events?ecat=' + ecats.aess} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="rgb(110 110 193)" />
          </>
        )}
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid container spacing={2} justify="center">
            {execom.aess.map(member => (
              <Grid item xs={12} md={4}>
                <Avatar name={member.name} position={member.position} src={member.image} />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <AlumniAccordions members={alumni.aess} color="rgb(110 110 193)" />
        <br />
      </Container>
    </div>
  );
}
