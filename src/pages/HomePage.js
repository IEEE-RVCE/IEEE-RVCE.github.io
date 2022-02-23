import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  Container,
  Typography,
  Grid,
  CssBaseline,
  Box,
  Button,
  TextField,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import EventsCalendar from "../components/Calendar";
import Avatar from "../components/Avatar";
import FrontText from "../components/FrontText";
import { execom, alumni, ecats, hostname } from "../links";
import FrontBox from "../components/FrontBox";
import SpacyDivider from "../components/SpacyDivider";
import AlumniAccordions from "../components/AlumniAccordions";
import GiveMeABreak from "../components/GiveMeABreak";
import EventCard from "../components/EventCard";
import axios from "axios";
import Confetti from "../animations/Confettie";
const useStyles = makeStyles((theme) => ({
  root: theme.root,
  container: theme.page,
  paper: {
    ...theme.paper,
    padding: theme.spacing(4),
  },
  link: theme.link,
  textField: {
    marginBottom: "10px",
    width: "60vw",
    [`& fieldset`]: {
      borderRadius: "0.25rem",
    },
  },
  "@global": {
    ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#12c48c",
    },
  },
}));

export default function HomePage(props) {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  useEffect(() => {
    axios.get(hostname + "/api/event/cat/" + ecats.main).then((response) => {
      setEvents(response.data.events);
    });
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline></CssBaseline>
      <FrontBox />
      <Container className={classes.container}>
        <FrontText />
        <SpacyDivider num={2} color="#12c48c" />
        <Typography variant="h4" align="center">
          Executive Committee
        </Typography>
        <br />
        <Container maxWidth="md">
          <Grid container spacing={3} justify="space-evenly">
            <div ref={myRef}>
              {/**
                      ! Take Proper Permissions from Chair and Vice Chair for more details check the Confetti component
                       */}
              {myElementIsVisible ? (
                <>
                  <Confetti />
                </>
              ) : null}
            </div>
            {/* <Grid container item xs={12} sm={6} md={4} lg={3}> */}
            {execom.main.map((member) => (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Avatar
                  name={member.name}
                  position={member.position}
                  src={member.image}
                />
              </Grid>
            ))}
            {/* </Grid> */}
          </Grid>
        </Container>

        <AlumniAccordions members={alumni.main} color="#12c48c" />
        <SpacyDivider num={2} color="#12c48c" />
        {events.length !== 0 && (
          <div hidden>
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
              {events.length >= 4 && (
                <Link
                  to={"/events?ecat=" + ecats.main}
                  className={classes.link}
                >
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="#12c48c" />
          </div>
        )}
        <Box>
          <Typography variant="h4" align="center">
            Upcoming Events
          </Typography>
          <br />
          <Container maxWidth="md">
            <EventsCalendar toolbar={false} defaultView="agenda" />
            <Link to="/calendar" className={classes.link}>
              Click here to view full calendar
            </Link>
          </Container>
        </Box>
      </Container>

      {/* contact form */}

      <Container>
        <SpacyDivider num={2} color="#12c48c" />
        <Typography variant="h4" align="center">
          Contact Us
        </Typography>
        <br />
        <Box align="center">
          <form
            action="https://formspree.io/f/xjvjbrdz"
            method="POST"
            target="_blank"
          >
            {/* <InputLabel> */}
            {/* Your email:  */}
            <TextField
              type="text"
              name="_name"
              variant="outlined"
              className={classes.textField}
              label="Your name"
            />
            <TextField
              type="email"
              name="_replyto"
              variant="outlined"
              className={classes.textField}
              label="Your email"
            />
            {/* </InputLabel> */}
            <br />
            {/* <InputLabel> */}
            {/* Your message: */}
            <TextField
              name="message"
              variant="outlined"
              multiline
              className={classes.textField}
              label="Your message"
              rows={5}
            />
            {/* </InputLabel> */}
            <br />
            <Button type="submit" align="center" style={{ marginBottom: "1%" }}>
              Send
            </Button>
            <br />
          </form>
        </Box>
      </Container>
      <GiveMeABreak num={2} />
    </div>
  );
}
