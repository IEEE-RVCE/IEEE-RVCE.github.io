import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {hostname} from '../links';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Button, Container, Grid, LinearProgress } from '@material-ui/core';
import {AddEventDialog} from '../components/AddEventDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.page,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    link: theme.link,
    griditem: {
        width: '90%',
        padding: theme.spacing(4),
    },
    backButton: {
        float: "left",
        display: "flex",
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    adminButtons: {
        float:"right", 
        display:"flex",
        flexDirection:"row",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    loadingBar: {
        paddingTop: 20,
        minHeight: 1000,
    },
    header: {
        textAlign: 'center',
    }
}))
 
export default function EventPage() {
    const classes = useStyles()
    let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const [loaded, setLoaded] = useState(false);
    let {eid} = useParams()
    const [event, setEvent] = useState({ename: ''})
    
    useEffect(() => {
        setLoaded(false)
        axios.get(hostname + '/api/event/' + eid)
        .then((response) => {
            setEvent(response.data.event)
        })
        .then(() => {
            setLoaded(true)
        })
    },[eid])

    const eventTimes = {
        start: new Date(event.eventstart),
        end: new Date(event.eventend)
    }

    const deleteEvent = () => {
        axios.delete(hostname+ '/api/event/' + eid, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('atoken')
            }
        })
        .then(response => {
            if (response.data.ok === true) {
                console.log("Successfully deleted event " + eid)
                window.history.back()
            }
            else {
                console.error("Deletion failed")
            }
        })
    }

    const [dialog, setDialog] = useState(false);

    const handleDialogClose = () => {
        setDialog(false)
    }
    const handleDialogOpen = () => {
        setDialog(true)
    }

    return(
        loaded?
        (
            <div className={classes.root}>
                <div className={classes.backButton}>
                    <Button onClick={() => window.location.href = window.location.href.substring(0, window.location.href.indexOf(eid))} size="small">Go back</Button>
                </div>
                {
                        loggedIn && (
                            <>
                                <div className={classes.adminButtons}>
                                    <Button onClick={handleDialogOpen} size="small">Edit</Button>
                                    <Button onClick={deleteEvent} size="small">Remove</Button>
                                </div>
                            </>
                        )
                }
                <Container maxWidth='xl' fluid>
                    <Typography variant='h3' className={classes.header}><b>{event.ename}</b></Typography>
                    <br/><br/>
                    <Grid container spacing={3} justify='center'>
                        <Grid xs={12} md={6} lg={4}>
                            <div className={classes.griditem}>
                                <Typography variant='h5'>
                                    <b>Description:</b> {event.details}
                                </Typography>
                                <br/>
                                <Typography variant='h6'>
                                    <b>From:</b> {eventTimes.start.toString().slice(0,24)}
                                </Typography>
                                <Typography variant='h6'>
                                    <b>To:</b> {eventTimes.end.toString().slice(0,24)}
                                </Typography>
                                <br/>
                                <Typography variant='h6'>
                                    <b>Fee:</b> <br/>IEEE Member: {event.feeyes} <br/>Non-IEEE Member: {event.feeno}
                                </Typography>
                                <br/>
                                <Typography variant='h5'>
                                    Register for the event <a className={classes.link} href={event.reglink} target='_blank' rel='noopener noreferrer'>here</a>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid xs={12} md={6} lg={4}>
                            <div className={classes.griditem}>
                                <img src={event.largeposterlink} alt='Event poster' style={{width: 'inherit'}}/>
                            </div>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Typography variant='h4' className={classes.header}><b>Speakers:</b></Typography>
                    <br/>
                    <br/>
                    <Grid container spacing={3} justify='center'>
                        {
                            event.hosts.map((host) => (
                                <Grid container xs={12} md={6} lg={4} spacing={2} className={classes.griditem}>
                                    <Grid xs={12} className={classes.griditem}>
                                        <Typography variant='h5'><b>{host.name}</b></Typography><br/>
                                        {
                                            host.details !== "" && (
                                                <>
                                                    <Typography variant='h6'><b>About the host: </b>{host.details}</Typography><br/>
                                                </>
                                            )
                                        }
                                    </Grid>
                                    {
                                        host.piclink !== "" && (
                                            <Grid xs={12} className={classes.griditem}>
                                                <img src={host.piclink} alt={host.name}/>
                                            </Grid>
                                        )
                                    }
                                </Grid>
                            ))
                        }
                    </Grid>
                    <br/>
                </Container>
                <AddEventDialog 
                    open={dialog} 
                    onClose={handleDialogClose} 
                    aria-label="edit-event-dialog" 
                    data={{
                        ...event,
                        eventstart: new Date(event.eventstart),
                        eventend: new Date(event.eventend),
                        pubstart: new Date(event.pubstart),
                        pubend: new Date(event.pubend)
                    }}
                    edit={true}
                />
            </div>
        )
        :
        (
            <div className={classes.loadingBar}>
                <LinearProgress/>
            </div>
        )
    )
}