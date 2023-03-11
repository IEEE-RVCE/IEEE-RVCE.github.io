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

export default function PESSocietyPage(props) {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(hostname + '/api/event/cat/' + ecats.pes).then(response => {
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
        src={images.landing.pes}
        id="soclanding"
        alt="Power and Energy Society"
        style={{ maxHeight: '100vh', width: '100%' }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
            To inclulcate scientific and engineering knowledge in Power and Energy sector for the betterment of the
            society along with professional development of the members.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(53 176 232)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
            <ul>
              <li>To embrace Research and Development in power generation and energy storage.</li>
              <li>
                To provide a platform for professionals in power and energy to share interchange the technological
                development, ideas and experience amongst one another and to the masses{' '}
              </li>
              <li>
                To ensure many student members of PES chapter become professionals in power and energy field and
                contribute to the society in this sector.
              </li>
              <li> To ensure overall professional development of the members.</li>
            </ul>
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(53 176 232)" />
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
                <Link to={'/events?ecat=' + ecats.pes} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="rgb(53 176 232)" />
          </>
        )}
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid container spacing={2} justify="center">
            {execom.pes.map(member => (
              <Grid item xs={12} md={4}>
                <Avatar name={member.name} position={member.position} src={member.image} />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <AlumniAccordions members={alumni.pes} color="rgb(53 176 232)" />
        <br />
      </Container>
    </div>
  );
}
