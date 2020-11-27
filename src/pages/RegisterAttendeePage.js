import React, { useEffect, useState } from 'react'
import { Select, Paper, FormControl, MenuItem, InputLabel, Typography, TextField, RadioGroup, FormLabel, FormControlLabel, Radio, Button, Snackbar } from '@material-ui/core';
import { ecats, hostname } from '../links';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

export default function RegisterAttendeePage(props) {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(0);
    const [eid, setEid] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [memNum, setMemNum] = useState("");
    const [phNo, setPhNo] = useState("");
    const [isMem, setIsMem] = useState(false);

    const [regRes, setRegRes] = useState({
        error: false,
        success: false,
        dataErr: false,
    })

    const handleFilter = (event) => {
        setCategory(event.target.value);
        setEid(0);
    }

    const handleClose = (prop) => (event, reason) => {
        if(reason === 'clickaway')
        return;
        setRegRes({...regRes, [prop]:false})
    }

    useEffect(() => {
        setLoading(true)
        axios.get(category !== 0 ? hostname + '/api/event/cat/' + category : hostname + '/api/event')
            .then(response => {
                setEvents(response.data.events)
            })
            .then(() => {
                setLoading(false)
            })
    }, [category]);

    const submitData = () => {
        if(name.length===0 || email.length===0 || eid===0 || phNo.length<10)
        {
            setRegRes({...regRes, dataErr:true});
            return;
        }

        let values = {
            eid: eid,
            name: name,
            email: email,
            isIeee: isMem,
            memnum: memNum,
            phnum: phNo
        };

        axios.post(hostname + '/api/attendee', values, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('atoken')
            },
        })
        .then((response) => {
            if(response.data.ok === true)
                setRegRes({...regRes, success: true})
            else
                setRegRes({...regRes, error: true})
        })
        .then(() => {
            window.location.reload()
        })
        .catch((error) => {
            console.error(error.response)
            setRegRes({...regRes, error: true})
        })
    }

    return (
        <div style={{ marginTop: "5%" }} align="center">
            <Paper style={{ width: "80%" }} align="center">
                <Typography variant="h3" margin="normal">Event Registration Form</Typography>
                <FormControl style={{margin:"1%"}}>
                    <InputLabel id='ecat-search-label'>Select Society/Affinity</InputLabel>
                    <Select
                        labelId='ecat-search-label'
                        id='ecat-search'
                        value={category}
                        onChange={handleFilter}
                        style={{ minWidth: "200px" }}
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
                <br />
                <FormControl style={{margin:"1%"}}>
                    <InputLabel id="event-selection">Select Event</InputLabel>
                    <Select
                        labelId="event-selection"
                        id="eid-select"
                        value={eid}
                        onChange={(e) => setEid(e.target.value)}
                        style={{ minWidth: "300px",maxWidth:"400px" }}
                    >
                        {events.map(function (item) {
                            return <MenuItem key={item.ename} value={item.eid} style={{ minWidth: "300px",maxWidth:"400px"}}>{item.ename}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <br />
                <FormControl>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        label="Full Name"
                        InputLabelProps={{
                            shrink: true
                        }}
                        defaultValue=''
                        required
                        style={{margin:"1%"}}
                    />
                    <br />
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter e-mail ID"
                        label="Email ID"
                        InputLabelProps={{
                            shrink: true
                        }}
                        defaultValue=''
                        required
                        style={{margin:"1%"}}
                    />
                    <br />
                    <FormControl style={{margin:"1%"}}>
                    <FormLabel component="legend">Are you an IEEE member?</FormLabel>
                    <RadioGroup aria-label="isIEEEmem" name="gender1" value={isMem} onChange={(e)=>setIsMem(e.target.value)}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                    </FormControl>
                    <TextField
                        value={memNum}
                        onChange={(e) => setMemNum(e.target.value)}
                        placeholder="Enter IEEE member number"
                        label="IEEE Member Number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        //defaultValue=''
                        disabled={isMem===false}
                        style={{margin:"1%"}}
                    />
                    <br />
                    <TextField
                        value={phNo}
                        onChange={(e) => setPhNo(e.target.value)}
                        placeholder="Enter Contact number"
                        label="Contact Number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        defaultValue=''
                        required
                        //error={phNo.length < 10}
                        style={{margin:"1%"}}
                    />
                </FormControl>
                <br/>
                <Button onClick={submitData} style={{margin:"1%"}}>Register</Button>
            </Paper>
            <Snackbar open={regRes.error} autoHideDuration={6000} onClose={handleClose('error')}>
                <Alert elevation={6} variant="filled" onClose={handleClose('error')} severity="error">An error occurred while registering, please try again</Alert>
            </Snackbar>
            <Snackbar open={regRes.success} autoHideDuration={6000} onClose={handleClose('success')}>
                <Alert elevation={6} variant="filled" onClose={handleClose('success')} severity="success">Successfully registered</Alert>
            </Snackbar>
            <Snackbar open={regRes.dataErr} autoHideDuration={6000} onClose={handleClose('dataErr')}>
                <Alert elevation={6} variant="filled" onClose={handleClose('dataErr')} severity="error">Please enter the required details!</Alert>
            </Snackbar>
        </div>
    )
}