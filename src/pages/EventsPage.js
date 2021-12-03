/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
} from "@material-ui/core";
import EventCard from "../components/EventCard";
import axios from "axios";
import { ecats, hostname } from "../links";
import { Skeleton } from "@material-ui/lab";
import { Add } from "@material-ui/icons";
import { AddEventDialog } from "../components/AddEventDialog";
import * as queryString from "query-string";
import EventsBox from "../components/EventsBox";
import GiveMeABreak from "../components/GiveMeABreak";

const useStyles = makeStyles((theme) => ({
  root: {
    // ...theme.page,
    ...theme.root,
    textAlign: "center",
    alignContent: "center",
  },
  instructions: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backdrop: {
    zIndex: 100,
    color: "#fff",
  },
  fab: {
    ...theme.fab,
    right: 100,
  },
  searchBars: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bar: {
    ...theme.transbg,
  },
}));

export default function EventPage(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  let loggedIn = localStorage.getItem("isAuthenticated") === "true";
  const { ecat } = queryString.parse(props.location.search);

  //Get events from db and use a list to manage which events are being shown
  const [events, setEvents] = useState([]);
  const [list, setList] = React.useState([
    { hi: "these" },
    { dont: "mean" },
    { anything: "they" },
    { help: "skeletons" },
  ]);

  //search text
  const [text, setText] = React.useState("");
  //Keyword search
  const handleSearch = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    var updatedList = events;
    updatedList = events.filter(function (item) {
      if (text === "") return events;
      return (
        item.keywords.toLowerCase().search(text.toLowerCase()) !== -1 ||
        item.ename.toLowerCase().search(text.toLowerCase()) !== -1
      );
    });
    setList(updatedList);
  }, [events, text]);

  //Society names for dropdown filter
  const [category, setCategory] = React.useState(ecat !== undefined ? ecat : 0);
  //Society filter
  const handleFilter = (event) => {
    setCategory(event.target.value);
    window.location.href =
      event.target.value !== 0
        ? window.location.origin + "/#/events?ecat=" + event.target.value
        : window.location.origin + "/#/events";
  };

  //Dialog stuff
  const [dialog, setDialog] = useState(false);
  const handleDialogClose = () => {
    setDialog(false);
  };
  const handleDialogOpen = () => {
    setDialog(true);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        ecat !== undefined
          ? hostname + "/api/event/cat/" + ecat
          : hostname + "/api/event"
      )
      .then((response) => {
        setEvents(response.data.events);
        setList(response.data.events);
      })
      .then(() => {
        setLoading(false);
      });
  }, [ecat]);

  // Event Sorted on basis of Event Start Date; (if anyone has a better idea, let's goooo!)
  list.sort(function (a, b) {
    return new Date(b.eventstart) - new Date(a.eventstart);
  });
  return (
    <div className={classes.root}>
      <EventsBox />
      <Container maxWidth="lg">
        <div className={classes.searchBars}>
          <div
            className={classes.bar}
            style={{ float: "right", display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <TextField
                value={text}
                onChange={handleSearch}
                placeholder="Enter keywords or name"
                label="Search events"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="All"
              />
            </FormControl>
          </div>
          <div
            className={classes.bar}
            style={{
              float: "left",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <FormControl>
              <InputLabel id="ecat-search-label">Search by category</InputLabel>
              <Select
                labelId="ecat-search-label"
                id="ecat-search"
                value={category}
                onChange={handleFilter}
                style={{ minWidth: "200px" }}
              >
                <MenuItem key={"All"} value={0}>
                  All
                </MenuItem>
                <MenuItem key={"CompSoc"} value={ecats.compsoc}>
                  Computer Society
                </MenuItem>
                <MenuItem key={"ComSoc"} value={ecats.comsoc}>
                  Communication Society
                </MenuItem>
                <MenuItem key={"APS"} value={ecats.aps}>
                  Antenna Propogation Society
                </MenuItem>
                <MenuItem key={"SPS"} value={ecats.sps}>
                  Signal Processing Society
                </MenuItem>
                <MenuItem key={"PES"} value={ecats.pes}>
                  Power and Energy Society
                </MenuItem>
                <MenuItem key={"RAS"} value={ecats.ras}>
                  Robotic and Automation Society
                </MenuItem>
                <MenuItem key={"SIGHT"} value={ecats.sight}>
                  Special Interest Group on Humanitarian Technology
                </MenuItem>
                <MenuItem key={"WIE"} value={ecats.wie}>
                  Women in Engineering
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/* <Typography variant='h4' style={{textAlign: 'center'}}><b>Events</b></Typography> */}
        <br />
        {Array.isArray(list) && list.length !== 0 ? (
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="stretch"
            className={classes.grid}
          >
            {list.map(function (item) {
              if (loading) {
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
          <Typography variant="h5" style={{ textAlign: "center" }}>
            No events to display
          </Typography>
        )}
      </Container>
      {loggedIn && (
        <>
          <Tooltip title="Add event" aria-label="add-event-tooltip">
            <Fab
              onClick={handleDialogOpen}
              aria-label="addEvent"
              className={classes.fab}
            >
              <Add />
            </Fab>
          </Tooltip>
          <AddEventDialog
            onClose={handleDialogClose}
            aria-label="add-event-dialog"
            open={dialog}
          />
        </>
      )}
      <GiveMeABreak />
      <GiveMeABreak />
      <GiveMeABreak />
    </div>
  );
}
