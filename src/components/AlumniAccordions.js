import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { hostname } from '../links';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import Avatar from './Avatar';
import GiveMeABreak from './GiveMeABreak';
import SpacyDivider from './SpacyDivider';

const useStyles = makeStyles(theme => ({
  paper: {
    ...theme.paper,
    padding: theme.spacing(4),
    backgroundColor: '#00000000',
  },
}));

export default function AlumniAccordions(props) {
 //const { members } = props;

  const [members, setMembers] = useState({});

  useEffect(() => {
    axios.get(hostname + '/api/execom/alumini/' + props.sid).then(response => {
      setMembers(response.data.alumini);
      console.log(response.data.alumini);
    });
  }, [props.sid]);


  const classes = useStyles();
 // console.log(members);
  let color = props.color ?? '#222222';
  return (
    <>
      {
        // Check if members is not empty
        members !== undefined && Object.keys(members).length !== 0 && (
          <>
            <SpacyDivider color={color} />
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h4" align="center">
                Alumni
              </Typography>
              <GiveMeABreak num={2} />
              {Object.keys(members).map(batch => (
                <Accordion
                  style={{
                    borderLeft: '1px solid ' + color,
                    borderBottom: '2px solid ' + color,
                    backgroundColor: '#00000000',
                    boxShadow: '0px 0px 0px 0px #00000000',
                  }}
                >
                  <AccordionSummary>
                    <Typography>{batch}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2} justify="center">
                      {members[batch].map(member => (
                        <Grid item xs={12} md={4}>
                          <Avatar name={member.name} position={member.position} src={member.image} />
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
            <br />
          </>
        )
      }
    </>
  );
}
