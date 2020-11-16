import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";  
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {Link} from 'react-router-dom';
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.eventcard,
    maxWidth: 345,
    '&:hover': {
      boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
      transitionDuration: 200,
   },
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
}));

export default function EventCard(props) {
  const classes = useStyles();
  const prefersDarkMode = localStorage.getItem('darkMode') === 'true';
  let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
  console.log(loggedIn)
  //let mobile = window.matchMedia('(max-width: 300px)').matches === 'true';
  const [open, setOpen] = React.useState(false);
  const [eventDialog,setEventDialog] = React.useState(false);

  const eventTimes = {
    start: new Date(props.event.eventstart),
    end: new Date(props.event.eventend)
  }

  //Shows snackbar with message and copies link in '' for user
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(document.URL + '/' + props.event.eid);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root} onDoubleClick={() => window.location.href = window.location.href + '/' + props.event.eid}>
        <CardHeader
          title={props.event.ename}
          subheader={eventTimes.start.toString().slice(0,24) + " to " + eventTimes.end.toString().slice(0,24)}
        />
        <CardMedia
          className={classes.media}
          image={props.event.smallposterlink}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Keywords: {props.event.keywords}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{marginTop:"auto"}}>
          <Button size="small" onClick={handleClick}>
            Share
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Link Copied!
            </Alert>
          </Snackbar>
          <Link style={{textDecoration: 'none'}} to={'/events/'+props.event.eid}>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </Card>

      {/* Dialog for each event*/}
      <Dialog
        open={Boolean(eventDialog)}
        onClose={() => setEventDialog(false)}
        scroll="body"
        variant="fade"
      >
        <DialogTitle>
          {props.event.name}
          {loggedIn && (<div style={{float:"right", display:"flex",flexDirection:"row"}}>
            <Button size="small">Edit</Button>
            <Button size="small">Remove</Button>
          </div>)}
        </DialogTitle>
        <DialogContent>
        <div className={classes.dialog}>
            <div className={classes.content}>
                <span style={{fontSize:"1em"}}>
                    <b>Description:</b> {props.event.description}
                </span><br/><br/>
                <span style={{fontSize:"1em", margin:"2px"}}>
                    <b>Date and Time:</b> {props.event.date},{props.event.time}
                </span><br/><br/>
                <span style={{fontSize:"1em", margin:"2px"}}>
                    <b>Fee:</b> {props.event.fee}
                </span><br/><br/>
                <span style={{fontSize:"1em", margin:"2px"}}>
                    <b>Speakers:</b> {props.event.speaker}
                </span><br/><br/>
                <span style={{fontSize:"1em", margin:"2px"}}>
                    <b>About Speakers:</b> {props.event.aboutSpeaker}
                </span><br/><br/>
                <span style={{fontSize:"1em", margin:"2px"}}>
                    <b>Registration Link:</b> <a href={props.event.reglink}>{props.event.reglink}</a>
                </span><br/><br/>
                <span style={{fontSize:"1em", margin:"2px"}}>
                    <b>Keywords:</b> {props.event.keywords}
                </span>
            </div>
            <div className={classes.poster}>
                <img src={props.event.largeposter} style={{backgroundSize:"contain",width:"inherit",}}/>
            </div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
