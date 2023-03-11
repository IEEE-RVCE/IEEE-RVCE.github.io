import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../components/Avatar";
import EventCard from "../components/EventCard";
import { hostname, ecats, images, execom, alumni } from "../links";
import AlumniAccordions from "../components/AlumniAccordions";
import SpacyDivider from "../components/SpacyDivider";

const useStyles = makeStyles((theme) => ({
  root: theme.root,
  container: theme.page,
  paper: {
    ...theme.paper,
    padding: theme.spacing(4),
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
}));

export default function SCSocietyPage(props) {
  const classes = useStyles();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(hostname + "/api/event/cat/" + ecats.sc).then((response) => {
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
        src={images.landing.sc}
        id="soclanding"
        alt="Sensors Council"
        style={{ maxHeight: "100vh", width: "100%" }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
            To help members learn about Theory, Design and fabrication and
            applications of devices for sensing and transducing physical and
            biological phenomena while focusing on the electronics to create
            sensors and actuators.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(153 221 227)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
            {/* 1. To teach members more about the importance,working and design of sensors and actuators
2. To help students know about the latest trends in sensors and related fields of interest
3. Enable collaborative efforts within societies to work together in a multi-disciplinary technical area of mutual interest. */}
            <ol>
              <li>
                To teach members more about the importance,working and design of
                sensors and actuators
              </li>
              <li>
                To help students know about the latest trends in sensors and
                related fields of interest
              </li>
              <li>
                Enable collaborative efforts within societies to work together
                in a multi-disciplinary technical area of mutual interest.
              </li>
            </ol>
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(153 221 227)" />
        {events.length !== 0 && (
          <>
            <Paper className={classes.paper}>
              <Typography variant="h3">Events</Typography>
              <br />
              <Grid container spacing={2} justify="center">
                {events.slice(0, 3).map((item) => {
                  return (
                    <Grid item xs={12} md={4}>
                      <EventCard event={item} />
                    </Grid>
                  );
                })}
              </Grid>
              <br />
              {events && events.length >= 4 && (
                <Link to={"/events?ecat=" + ecats.sc} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="rgb(153 221 227)" />
          </>
        )}
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid container spacing={2} justify="center">
            {execom.sc.map((member) => (
              <Grid item xs={12} md={4} key={member.name}>
                <Avatar
                  name={member.name}
                  position={member.position}
                  src={member.image}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <AlumniAccordions members={alumni.sc} color="rgb(153 221 227)" />
        <br />
      </Container>
    </div>
  );
}
