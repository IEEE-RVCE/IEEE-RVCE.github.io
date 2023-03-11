import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  '@global': {
    '.MuiCardHeader-content': {
      minWidth: 0,
    },
  },
  'root': {
    ...theme.eventcard,
    'height': '100%',
    'maxWidth': 345,
    '&:hover': {
      boxShadow:
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
      transitionDuration: 200,
    },
    'margin': 'auto',
  },
  'media': {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function EventCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [imgLink, setImgLink] = React.useState(props.event.smallposterlink);
  const eventTimes = {
    start: new Date(props.event.eventstart),
    end: new Date(props.event.eventend),
  };

  //Shows snackbar with message and copies link in '' for user
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.origin + '/#/events/' + props.event.eid);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // Image Verification Stufff, better ideas than this, come on lesgoo !!

  const doesImageExist = url =>
    new Promise(resolve => {
      const img = new Image();

      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });

  const joke = 'No Image Available';

  doesImageExist(props.event.smallposterlink).then(result => {
    if (!result) {
      setImgLink(`https://fakeimg.pl/350x200/?text=${joke}&font_size=50`);
    }
  });

  return (
    <>
      <Card
        title={props.event.ename}
        className={classes.root}
        onDoubleClick={() => (window.location.href = window.location.href + '/' + props.event.eid)}
      >
        <CardHeader
          title={props.event.ename}
          subheader={eventTimes.start.toString().slice(4, 15) + ' to ' + eventTimes.end.toString().slice(4, 15)}
          titleTypographyProps={{
            noWrap: true,
          }}
        />
        <CardMedia className={classes.media} image={imgLink} title={props.event.ename} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" noWrap>
            Keywords: {props.event.keywords}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ marginTop: 'auto' }}>
          <Button size="small" onClick={handleClick}>
            Share
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Link Copied!
            </Alert>
          </Snackbar>
          <Link style={{ textDecoration: 'none' }} to={'/events/' + props.event.eid}>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
