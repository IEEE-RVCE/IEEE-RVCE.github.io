import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.root,
    paddingTop: 400,
    paddingBottom: 400,
    [theme.breakpoints.down('md')]: {
      paddingTop: 320,
      paddingBottom: 320,
    },
  },
  text: {
    textAlign: 'center',
  },
  link: {
    ...theme.link,
  },
}));

export default function NotFoundPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h1">
        404
      </Typography>
      <Typography className={classes.text} variant="h4">
        Seems like you are lost, click{' '}
        <Link className={classes.link} to="/">
          here
        </Link>{' '}
        to go back to safety
      </Typography>
    </div>
  );
}
