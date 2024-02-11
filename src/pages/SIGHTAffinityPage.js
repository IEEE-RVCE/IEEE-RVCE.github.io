import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import EventCard from '../components/EventCard';
import { hostname, ecats, images,alumni } from '../links';
import AlumniAccordions from '../components/AlumniAccordions';
import SpacyDivider from '../components/SpacyDivider';
import SocietyExec from './SocietyExec';

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

export default function SIGHTAffinityPage(props) {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(hostname + '/api/event/cat/' + ecats.sight).then(response => {
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
        src={images.landing.sight}
        id="soclanding"
        alt="Special Interest Group in Humanitarian Technology"
        style={{ maxHeight: '100vh', width: '100%' }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
            Positively impact society through engineering projects on sustainable development.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(61 144 142)" />

        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
            <List>
              <ListItem>
                <Typography variant="body1">
                  - Develop solutions for challenges faced by undeserved communities.{' '}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  - Encourage engineering students to apply technological skills by working on projects that support the
                  community around us.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  - Incorporate new humanitarian technologies and upskill ourselves as engineers.
                </Typography>
              </ListItem>
            </List>
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(61 144 142)" />
        <br />
        {events.length !== 0 && (
          <>
            <Paper className={classes.paper}>
              <Typography variant="h3">Events</Typography>
              <br />
              <Grid container spacing={2} justifyContent="center">
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
                <Link to={'/events?ecat=' + ecats.sight} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <br />
          </>
        )}
        {/* <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid hidden container spacing={2} justify="center">
            {execom.sight.map(member => (
              <Grid item xs={12} md={4}>
                <Avatar name={member.name} position={member.position} src={member.image} />
              </Grid>
            ))}
          </Grid>
        </Paper> */}
         <SocietyExec sid = {ecats.sight}/>
        <br />
        <AlumniAccordions members={alumni.sight} sid = {ecats.sight} />
        <br />
      </Container>
    </div>
  );
}
