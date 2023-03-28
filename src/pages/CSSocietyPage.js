import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container,
  Grid, 
  Typography, 
  Paper,
  Fab,
  IconButton,
  Snackbar,
  Tooltip } from '@material-ui/core';
  import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import EventCard from '../components/EventCard';
import { hostname, ecats, images, execom, alumni } from '../links';
import AlumniAccordions from '../components/AlumniAccordions';
import SpacyDivider from '../components/SpacyDivider';
import { AddExecomDialog } from '../components/AddExecomDialog';
import Alert from '@material-ui/lab/Alert';

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
  grid: theme.grid,
  fab: {
    color:"green",
  }
}));

export default function CSSocietyPage(props) {
  const classes = useStyles();
  let loggedIn = localStorage.getItem('isAuthenticated') === 'true';

  const [events, setEvents] = useState([]);

    //Dialog stuff
    const [dialog, setDialog] = useState(false);
    const handleDialogClose = () => {
      setDialog(false);
    };
    const handleDialogOpen = () => {
      setDialog(true);
    };
  
  useEffect(() => {
    axios.get(hostname + '/api/event/cat/' + ecats.compsoc).then(response => {
      setEvents(
        response.data.events.sort((a, b) => {
          return new Date(b.eventstart) - new Date(a.eventstart);
        })
      );
    });
  }, []);

  const [del, setDel] = useState({
    error: false,
    success: false,
  });

  const handleClose = prop => (event, reason) => {
    if (reason === 'clickaway') return;
    setDel({ ...del, [prop]: false });
  };

  const deleteExecom = () => {
    // console.log(hostname + '/api/execom/end/'+ ecats.compsoc);
    axios
      .post(hostname + '/api/execom/end/', ecats.compsoc, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('atoken'),
        },
    })
    .then(response => {
      if (response.data.ok === true) setDel({ ...del, success: true });
      else setDel({ ...del, error: true });
    })
    .then(() => {
      window.location.reload();
    })
    .catch(error => {
      console.error(error.response);
      setDel({ ...del, error: true });
    });
  }

  return (
    <div className={classes.root}>
      <img
        src={images.landing.compsoc}
        id="soclanding"
        alt="Computer Society"
        style={{ maxHeight: '100vh', width: '100%' }}
      />
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Vision</Typography>
          <br />
          <Typography variant="body1">
            To impart knowledge pertaining to Computer Science and create a culture of continuous learning and
            innovation through research, development and experimentation while persevering to develop technology for the
            betterment of humanity and ensuring harmony within the community.
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(80 161 99)" />
        <Paper className={classes.paper}>
          <Typography variant="h3">Mission</Typography>
          <br />
          <Typography variant="body1">
            <ul>
              <li>
                To enable students to gain the skills needed to become responsible professionals and be more aware of
                the upcoming trends in computer science.
              </li>
              <li>To inculcate a mindset that makes students inquisitive</li>
              <li>
                To imbibe a sense of responsibility towards the technical and global community and fulfil the same by
                working towards building a collaborative network of like-minded individuals
              </li>
              <li>To apply observations and knowledge to community-driven sustainable projects</li>
            </ul>
          </Typography>
        </Paper>
        <SpacyDivider color="rgb(80 161 99)" />
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
                <Link to={'/events?ecat=' + ecats.compsoc} className={classes.link}>
                  Click here for more events
                </Link>
              )}
            </Paper>
            <SpacyDivider color="rgb(80 161 99)" />
          </>
        )}
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee
          <IconButton component="span" onClick={deleteExecom}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
          <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
          <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
          </svg>
          </IconButton>
          </Typography>
          <br />
          <Grid container spacing={2} justify="center">
            {execom.compsoc.map(member => (
              <Grid item xs={12} md={4}>
                <Avatar name={member.name} position={member.position} src={member.image} />
              </Grid>
            ))}
          </Grid>
        </Paper>
        {loggedIn && (
        <>
        <Tooltip title="Add Execom" aria-label="add-execom-tooltip">
            <Fab onClick={handleDialogOpen} aria-label="addExecom" className={classes.fab}>
              <Add />
            </Fab>
          </Tooltip>
          <AddExecomDialog onClose={handleDialogClose} aria-label="add-execom-dialog" open={dialog} sid={ecats.compsoc}/>
        </>
      )}
        <AlumniAccordions members={alumni.compsoc} color="rgb(80 161 99)" />
        <br />
      </Container>
      <Snackbar open={del.error} autoHideDuration={6000} onClose={handleClose('error')}>
        <Alert elevation={6} variant="filled" onClose={handleClose('error')} severity="error">
          An error occurred while deleting, please try again
        </Alert>
      </Snackbar>
      <Snackbar open={del.success} autoHideDuration={6000} onClose={handleClose('success')}>
        <Alert elevation={6} variant="filled" onClose={handleClose('success')} severity="success">
          Successfully ended tenure of current execom
        </Alert>
      </Snackbar>
    </div>
  );
}
