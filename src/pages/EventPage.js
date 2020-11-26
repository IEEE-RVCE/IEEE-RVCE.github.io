import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {hostname} from '../links';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Button, Container, Grid, LinearProgress } from '@material-ui/core';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@material-ui/lab';
import {Delete, Edit, Mail} from '@material-ui/icons';
import {AddEventDialog} from '../components/AddEventDialog';
import {MetaTags} from 'react-meta-tags';

const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiFab-primary': {
            backgroundColor: theme.fab.backgroundColor,
            color: theme.fab.color,
            '&:hover': {
                backgroundColor: theme.fab.backgroundColor,
                color: theme.fab.color,
            }
        },
    },
    root: {
        ...theme.root,
        ...theme.page,
        paddingBottom: theme.spacing(4),
    },
    link: theme.link,
    griditem: {
        width: '90%',
        padding: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1),
        }
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
        paddingTop: 60,
        minHeight: 1000,
    },
    header: {
        textAlign: 'center',
    },
    speedDial: {
        position: 'fixed',
        bottom: 32,
        right: 100,
    }
}))
 
export default function EventPage() {
    const classes = useStyles()
    let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const [loaded, setLoaded] = useState(false);
    let {eid} = useParams()
    const [event, setEvent] = useState({ename: ''})
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setLoaded(false)
        axios.get(hostname + '/api/event/' + eid)
        .then((response) => {
            if(response.data.ok) {
                setEvent(response.data.event)
                setLoaded(true)
            }
            else
                setError(true)
        })
        .catch((error) => {
            console.error(error)
            setError(true)
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

    // Dialog stuff
    const [dialog, setDialog] = useState(false);
    const handleDialogClose = () => {
        setDialog(false)
    }
    const handleDialogOpen = () => {
        setDialog(true)
    }

    // Speed dial stuff
    const [dialopen, setDialopen] = useState(false);
    const handleDialClose = () => {
        setDialopen(false)
    }
    const handleDialOpen = () => {
        setDialopen(true)
    }

    const notifyAll = () => {
        console.log("Yay! Notified!!")
    }
    const actions = [
        {icon: <Edit />, name: 'Edit event', onClick: handleDialogOpen},
        {icon: <Delete />, name: 'Delete event', onClick: deleteEvent},
        {icon: <Mail />, name: 'Notify attendees', onClick: notifyAll},
    ]
    return(
        loaded?
        (
            <div className={classes.root}>
                <MetaTags>
                    <meta
                    name={event.name}
                    content={event.details}
                    />
                    <meta
                    property="og:image"
                    content={event.smallposterlink}
                    />
                </MetaTags>
                <div className={classes.backButton}>
                    <Button onClick={() => window.history.back()} size="small">Go back</Button>
                </div>
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
                    {
                        Array.isArray(event.hosts) && event.hosts.length!==0 &&(
                            <>
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
                                                            <img src={host.piclink} alt={host.name} style={{width: 'inherit'}}/>
                                                        </Grid>
                                                    )
                                                }
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <br/>
                            </>
                        )
                    }
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
                {
                    loggedIn && (
                        <>
                            <SpeedDial
                            ariaLabel="Event page speed dial"
                            className={classes.speedDial}
                            icon={<SpeedDialIcon />}
                            onClose={handleDialClose}
                            onOpen={handleDialOpen}
                            open={dialopen}
                            >
                            {actions.map((action) => (
                                <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={action.onClick}
                                />
                            ))}
                            </SpeedDial>
                        </>
                    )
                }
            </div>
        )
        :
        (
            <div classes={(classes.loadingBar,classes.root)}>
                {error?(<Typography variant='h3' style={{textAlign: 'center', paddingTop: '20%'}}><b>No such event</b></Typography>):(<LinearProgress/>)}
            </div>
        )
    )
}