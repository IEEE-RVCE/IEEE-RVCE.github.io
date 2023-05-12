import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import { hostname} from '../links';



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

export default function SocietyExec({sid}) {
  const classes = useStyles();

  const [member, setMember] = useState([]);

  useEffect(() => {
    axios.get(hostname + `/api/execom/${sid}`).then(response => {
        setMember(response.data.execom);
      });
  
  }, []);

  return (
    <div className={classes.root}>
     
      <Container maxWidth="md">
        <br />
        <Paper className={classes.paper}>
          <Typography variant="h3">Executive Committee</Typography>
          <br />
          <Grid container spacing={2} justify="center">
                {member.map(mem => {
                  return (
                    <Grid item xs={12} md={4}>
                     <Avatar name={mem.name} position={mem.position} src={mem.image} />
                    </Grid>
                  );
                })}
              </Grid>

        </Paper>
        <br />
      </Container>
    </div>
  );
}
