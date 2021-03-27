import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography, Accordion, AccordionSummary, AccordionDetails, Grid} from '@material-ui/core';
import Avatar from './Avatar';

const useStyles = makeStyles((theme) => ({
    paper: {
        ...theme.paper,
        padding: theme.spacing(4),
    }
}))

export default function AlumniAccordions(props) {
    const {members} = props;
    const classes = useStyles();
    return (
        <>
            {
                (Object.keys(members).length!==0) && 
                (
                    <>   
                        <Paper className={classes.paper}>
                            <Typography variant='h4'>
                                Alumni
                            </Typography>
                            <br />
                            {
                                Object.keys(members).map((batch) => (
                                    <Accordion>
                                        <AccordionSummary>
                                            <Typography>{batch}</Typography>    
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2} justify='center'>
                                                {
                                                    members[batch].map((member) => (
                                                        <Grid item xs={12} md={4}>
                                                            <Avatar name={member.name} position={member.position} src={member.image}/>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
                        </Paper>
                        <br/>
                    </>
                )
            }
        </>
    )
}