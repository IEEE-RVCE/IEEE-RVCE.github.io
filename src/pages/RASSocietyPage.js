import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import { hostname, ecats, images, execom, alumni } from '../links';
import AlumniAccordions from '../components/AlumniAccordions';
import SpacyDivider from '../components/SpacyDivider';
import { imagePath } from '../data/misc';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// Hardcoded past-event entry: no admin/DB access is currently available to add this
// through the normal Add Event flow, so it's blended into the Events grid manually here.
const rosysseyEvent = {
  ename: 'ROSyssey - Journey into Robotics',
  eventstart: '2026-06-08T09:30:00',
  eventend: '2026-06-10T16:30:00',
  keywords: 'ROS2, Robotics, micro-ROS, ESP32',
  poster: `${imagePath}/ras/rosyssey/rosyssey_4.jpg`,
  details: `ROSyssey was a three-day hands-on robotics workshop conducted by the Robotics and Automation Society, IEEE RVCE Student Branch, at the Design Thinking Huddle, RV College of Engineering. It introduced 30 undergraduate participants to ROS2, micro-ROS, embedded systems integration, and mobile robot development, combining theory with hands-on implementation of a differential-drive rover platform.

Day 1 covered environment setup and ROS2 fundamentals. Day 2 covered ROS2 programming, micro-ROS on ESP32, and rover assembly. Day 3 focused on rover control, ROS2 velocity commands, encoder feedback, teleoperation, and IMU-based sensor fusion.

The workshop concluded with the NODE ZERO Capture the Flag (CTF) Challenge on 4 July 2026, an eight-level competitive event testing participants' proficiency in ROS2, micro-ROS, Linux, robot communication, debugging, and system integration.

Organized by the Robotics and Automation Society, IEEE RVCE Student Branch, with support from Astra Robotics RVCE.`,
  gallery: [1, 2, 3, 5, 6].map(n => `${imagePath}/ras/rosyssey/rosyssey_${n}.jpg`),
};

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
  eventcard: {
    ...theme.eventcard,
    height: '100%',
    maxWidth: 345,
    margin: 'auto',
    '&:hover': {
      boxShadow:
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
      transitionDuration: 200,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

// Visually matches EventCard exactly (same classes/markup), but "Read More" opens a dialog
// with the full report instead of navigating to /events/:eid, since this entry has no
// backend record to fetch. "Share" copies the RAS page link instead of a per-event link.
function RosysseyEventCard() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const eventTimes = {
    start: new Date(rosysseyEvent.eventstart),
    end: new Date(rosysseyEvent.eventend),
  };

  const handleShare = () => {
    setSnackOpen(true);
    navigator.clipboard.writeText(window.location.origin + '/#/society/ras');
  };

  return (
    <>
      <Card title={rosysseyEvent.ename} className={classes.eventcard}>
        <CardHeader
          title={rosysseyEvent.ename}
          subheader={eventTimes.start.toString().slice(4, 15) + ' to ' + eventTimes.end.toString().slice(4, 15)}
          titleTypographyProps={{ noWrap: true }}
        />
        <CardMedia className={classes.media} image={rosysseyEvent.poster} title={rosysseyEvent.ename} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" noWrap>
            Keywords: {rosysseyEvent.keywords}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ marginTop: 'auto' }}>
          <Button size="small" onClick={handleShare}>
            Share
          </Button>
          <Snackbar open={snackOpen} autoHideDuration={2000} onClose={() => setSnackOpen(false)}>
            <Alert onClose={() => setSnackOpen(false)} severity="success">
              Link Copied!
            </Alert>
          </Snackbar>
          <Button size="small" onClick={() => setDialogOpen(true)}>
            Read More
          </Button>
        </CardActions>
      </Card>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{rosysseyEvent.ename}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
            {rosysseyEvent.details}
          </Typography>
          <br />
          <Grid container spacing={2}>
            {rosysseyEvent.gallery.map(src => (
              <Grid item xs={12} sm={6} md={4} key={src}>
                <img src={src} alt="ROSyssey workshop" style={{ width: '100%', borderRadius: 4, display: 'block' }} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

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
        <Paper className={classes.paper}>
          <Typography variant="h3">Events</Typography>
          <br />
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={4}>
              <RosysseyEventCard />
            </Grid>
            {events.slice(0, 2).map(item => {
              return (
                <Grid item xs={12} md={4}>
                  <EventCard event={item} />
                </Grid>
              );
            })}
          </Grid>
          <br />
          {events.length >= 3 && (
            <Link to={'/events?ecat=' + ecats.ras} className={classes.link}>
              Click here for more events
            </Link>
          )}
        </Paper>
        <SpacyDivider color="rgb(12 104 171)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid container spacing={2} justify="center">
            {execom.ras.map(member => (
              <Grid item xs={12} md={4}>
                <Avatar name={member.name} position={member.position} src={member.image} />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <AlumniAccordions members={alumni.ras} color="rgb(12 104 171)" />
        <br />
      </Container>
    </div>
  );
}
