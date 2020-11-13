import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Container, Fab, Tooltip} from '@material-ui/core';
import EventCard from '../components/EventCard';
import axios from 'axios';
import { ecats, hostname } from '../links';
import {Skeleton} from '@material-ui/lab';
import { Add } from '@material-ui/icons';
import { AddEventDialog } from '../components/AddEventDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.page,
        textAlign: 'center',
        alignContent: 'center',
        margin: 'auto',
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
    }
}));

export default function EventPage(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false)
    let loggedIn = localStorage.getItem('isAuthenticated') === 'true';

    //Get events from db and use a list to manage which events are being shown
    const [events, setEvents] = useState([]);
    const [list, setList] = React.useState([
        {"hi": "these"},
        {"dont": "mean"},
        {"anything": "they"},
        {"help": "skeletons"}
    ]);
    useEffect(() => {
        setLoading(true)
        axios.get(hostname+'/api/event')
            .then(response => {
                setEvents(response.data.events)
                setList(response.data.events)
            })
            .then(() => {
                setLoading(false)
            })
    }, []);

    //search text
    const [text, setText] = React.useState("");
    //Keyword search
    const handleSearch = (event) => {
        setText(event.target.value);
        var updatedList = events;
        updatedList = events.filter(function (item) {
            if (text === "")
                return events;
            return (
                item.keywords.toLowerCase().search(text.toLowerCase()) !== -1 ||
                item.ename.toLowerCase().search(text.toLowerCase()) !== -1
            );
        });
        setList(updatedList);
    }

    //Society names for dropdown filter
    const [category, setCategory] = React.useState(props.ecat !==undefined?props.ecat:0);
    //Society filter
    const handleFilter = (event) => {
        setCategory(event.target.value);
    }

    useEffect(() => {
        let updatedList = events.filter((item) => {
            if (category === 0)
                return true;
            else
                return item.ecat === category;
        });
        setList(updatedList);
    }, [category, events])

    //Dialog stuff
    const [dialog, setDialog] = useState(false);
    const handleDialogClose = () => {
        setDialog(false)
    }
    const handleDialogOpen = () => {
        setDialog(true)
    }
    return (
            <div className={classes.root}>
                <div style={{ float: "right", display: "flex", flexDirection: 'row', marginRight: '5%' }}>
                    <FormControl>
                        <TextField
                            value={text}
                            onChange={handleSearch}
                            placeholder="Enter keywords or name"
                            label="Search events"
                            InputLabelProps= {{
                                shrink: true
                            }}
                            defaultValue='All'
                        />
                    </FormControl>
                </div>
                <div style={{ float: "left", display: "flex", flexDirection: 'row-reverse', marginLeft: '5%' }}>
                    <FormControl>
                        <InputLabel id='ecat-search-label'>Search by category</InputLabel>
                        <Select
                            labelId='ecat-search-label'
                            id='ecat-search'
                            value={category}
                            onChange={handleFilter}
                            style={{minWidth:"200px"}}
                        >
                            <MenuItem key={"All"} value={0}>All</MenuItem>
                            <MenuItem key={"CompSoc"} value={ecats.compsoc}>Computer Society</MenuItem>
                            <MenuItem key={"ComSoc"} value={ecats.comsoc}>Communication Society</MenuItem>
                            <MenuItem key={"APS"} value={ecats.aps}>Antenna Propogation Society</MenuItem>
                            <MenuItem key={"SPS"} value={ecats.sps}>Signal Processing Society</MenuItem>
                            <MenuItem key={"PES"} value={ecats.pes}>Power and Energy Society</MenuItem>
                            <MenuItem key={"RAS"} value={ecats.ras}>Robotic and Automation Society</MenuItem>
                            <MenuItem key={"SIGHT"} value={ecats.sight}>Special Interest Group on Humanitarian Technology</MenuItem>
                            <MenuItem key={"WIE"} value={ecats.wie}>Women in Engineering</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Container maxWidth='lg'>
                    <Typography variant='h4' style={{textAlign: 'center'}}><b>Events</b></Typography>
                    <br/>
                    <Grid container spacing={3} alignContent='center'>
                        {list.map(function (item) {
                            if(loading)
                            {
                                return(
                                    <Grid item lg={3} sm={6} xs={12} md={4}>
                                        <Skeleton animation="wave" variant="rect" height={400}/>
                                    </Grid>
                                )
                            }
                            else
                            {
                                return(   
                                    <Grid item lg={3} sm={6} xs={12} md={4}>
                                        <EventCard event={item} />
                                    </Grid>
                                )
                            }
                        })
                        }
                    </Grid>
            </Container>
            {
                loggedIn && (
                    <>
                        <Tooltip title="Add event" aria-label="add-event-tooltip">
                            <Fab onClick={handleDialogOpen} aria-label='addEvent' className={classes.fab}>
                                <Add/>
                            </Fab>
                        </Tooltip>
                        <AddEventDialog onClose={handleDialogClose} aria-label="add-event-dialog" open={dialog}/>
                    </>
                )
            }
        </div>
    );
}