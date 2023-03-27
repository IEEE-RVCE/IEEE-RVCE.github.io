import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Fab,
  Tooltip,
} from '@material-ui/core';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { ecats, hostname } from '../links';
import { Skeleton } from '@material-ui/lab';
import { Add } from '@material-ui/icons';
import { AddEventDialog } from '../components/AddEventDialog';
import * as queryString from 'query-string';
import EventsBox from '../components/EventsBox';
import GiveMeABreak from '../components/GiveMeABreak';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.root,
    textAlign: 'center',
    alignContent: 'center',
  },
  instructions: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backdrop: {
    zIndex: 100,
    color: '#fff',
  },
  fab: {
    ...theme.fab,
    right: 100,
  },
  searchBars: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  bar: {
    ...theme.transbg,
  },
}));

const getEvents = async ecat => {
  try {
    const url = ecat !== undefined ? `${hostname}/api/event/cat/${ecat}` : `${hostname}/api/event`;
    const response = await axios.get(url);
    const events = response.data.events;
    events.forEach(event => (event.eventstart = new Date(event.eventstart)));
    return events.sort((a, b) => b.eventstart - a.eventstart);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch events');
  }
};

export default function EventPage() {
  const classes = useStyles();
  const { search } = useLocation();
  const { ecat } = queryString.parse(search);
  let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
  // Get events from db and use a list to manage which events are being shown
  const { data: events, isFetching, error } = useQuery(['events', ecat], () => getEvents(ecat));

  // Keyword search
  const [text, setText] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearch = event => {
    const searchText = event.target.value;
    setText(searchText);
    if (searchText === '') {
      setFilteredEvents([]);
    } else {
      const filteredEvents = events.filter(event => {
        const titleMatch = event.ename.toLowerCase().includes(text.toLowerCase());
        const descriptionMatch = event.details.toLowerCase().includes(text.toLowerCase());
        return titleMatch || descriptionMatch;
      });
      setFilteredEvents(filteredEvents);
    }
  };

  const [category, setCategory] = useState(ecat ? ecat : 0);
  const handleFilter = event => {
    setCategory(event.target.value);
    window.location.href =
      event.target.value !== 0
        ? `${window.location.origin}/#/events?ecat=${event.target.value}`
        : `${window.location.origin}/#/events`;
  };

  const [dialog, setDialog] = useState(false);
  const handleDialogClose = () => {
    setDialog(false);
  };
  const handleDialogOpen = () => {
    setDialog(true);
  };

  return (
    <div className={classes.root}>
      <EventsBox />
      <Container maxWidth="lg">
        <div className={classes.searchBars}>
          <div className={classes.bar} style={{ float: 'right', display: 'flex', flexDirection: 'row' }}>
            <FormControl>
              <TextField
                value={text}
                onChange={handleSearch}
                placeholder="Enter keywords or name"
                label="Search events"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </div>
          <div
            className={classes.bar}
            style={{
              float: 'left',
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <FormControl>
              <InputLabel id="ecat-search-label">Search by category</InputLabel>
              <Select
                labelId="ecat-search-label"
                id="ecat-search"
                value={category}
                onChange={handleFilter}
                style={{ minWidth: '200px' }}
              >
                <MenuItem key={'All'} value={0}>
                  All
                </MenuItem>
                <MenuItem key={'CompSoc'} value={ecats.compsoc}>
                  Computer Society
                </MenuItem>
                <MenuItem key={'ComSoc'} value={ecats.comsoc}>
                  Communication Society
                </MenuItem>
                <MenuItem key={'APS'} value={ecats.aps}>
                  Antenna Propogation Society
                </MenuItem>
                <MenuItem key={'SPS'} value={ecats.sps}>
                  Signal Processing Society
                </MenuItem>
                <MenuItem key={'PES'} value={ecats.pes}>
                  Power and Energy Society
                </MenuItem>
                <MenuItem key={'RAS'} value={ecats.ras}>
                  Robotic and Automation Society
                </MenuItem>
                <MenuItem key={'SIGHT'} value={ecats.sight}>
                  Special Interest Group on Humanitarian Technology
                </MenuItem>
                <MenuItem key={'WIE'} value={ecats.wie}>
                  Women in Engineering
                </MenuItem>
                <MenuItem key={'cas'} value={ecats.cas}>
                  Circuits and Systems
                </MenuItem>
                <MenuItem key={'sensors'} value={ecats.sc}>
                  Sensors Council
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/* <Typography variant="h4" style={{ textAlign: 'center' }}>
          <b>Events</b>
        </Typography> */}
        <br />

        {isFetching && (
          <Grid container spacing={3} direction="row" alignItems="stretch" className={classes.grid}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid item lg={3} sm={6} xs={12} md={4} key={`skeleton-${index}`}>
                <Skeleton animation="wave" variant="rect" height={400} />
              </Grid>
            ))}
          </Grid>
        )}

        {error && (
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            Failed to fetch events.
          </Typography>
        )}

        {Array.isArray(filteredEvents) && filteredEvents.length !== 0 ? (
          <Grid container spacing={3} direction="row" alignItems="stretch" className={classes.grid}>
            {filteredEvents.map(item => {
              if (isFetching) {
                return (
                  <Grid item lg={3} sm={6} xs={12} md={4}>
                    <Skeleton animation="wave" variant="rect" height={400} />
                  </Grid>
                );
              } else {
                return (
                  <Grid item lg={3} sm={6} xs={12} md={4}>
                    <EventCard event={item} />
                  </Grid>
                );
              }
            })}
          </Grid>
        ) : Array.isArray(events) && events.length !== 0 ? (
          <Grid container spacing={3} direction="row" alignItems="stretch" className={classes.grid}>
            {events.map(item => {
              if (isFetching) {
                return (
                  <Grid item lg={3} sm={6} xs={12} md={4}>
                    <Skeleton animation="wave" variant="rect" height={400} />
                  </Grid>
                );
              } else {
                return (
                  <Grid item lg={3} sm={6} xs={12} md={4}>
                    <EventCard event={item} />
                  </Grid>
                );
              }
            })}
          </Grid>
        ) : (
          <Typography variant="body1">No events found.</Typography>
        )}
      </Container>
      {loggedIn && (
        <>
          <Tooltip title="Add event" aria-label="add-event-tooltip">
            <Fab onClick={handleDialogOpen} aria-label="addEvent" className={classes.fab}>
              <Add />
            </Fab>
          </Tooltip>
          <AddEventDialog onClose={handleDialogClose} aria-label="add-event-dialog" open={dialog} />
        </>
      )}
      <GiveMeABreak num={3} />
    </div>
  );
}
