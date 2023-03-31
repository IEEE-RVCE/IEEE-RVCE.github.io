import axios from 'axios';
import { hostname} from '../links';
import React, {useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import {  Snackbar,
    Grid,
    Tooltip,
    Fab } from '@material-ui/core';
import { Add,School}from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../components/Avatar';
import { AddExecomDialog } from './AddExecomDialog';
import { ConfirmEndTenureDialog} from './ConfirmTenureEnd';

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
    grid: theme.grid,
    fab: {
      color:"green",
    }
  }));

export default function SocietyExecom(props) {
    const exelist = props.exelist;
    const sid = props.sid;

    let loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const classes = useStyles();

    //Dialog stuff
    const [dialog, setDialog] = useState(false);
    const handleDialogClose = () => {
      setDialog(false);
    };
    const handleDialogOpen = () => {
      setDialog(true);
    };
    
    //Dialog of end tenure
    const [openEndTenureDialog, setOpen] = useState(false);
    const [endTenureState, changeTenureState] = useState(false);

    const handleEndTenureStateChange = (newState) => {
        // console.log(newState);
        changeTenureState(newState);
      }
      
    const handleEndTenureClickOpen = () => {
      setOpen(true);
    }; 
    const handleEndTenureClose = () => {
      setOpen(false);
      if(endTenureState)
      {
        deleteExecom();
        changeTenureState(false);
      }
    };
  
    const [del, setDel] = useState({
        error: false,
        success: false,
      });

    const handleClose = prop => (event, reason) => {
        if (reason === 'clickaway') return;
        setDel({ ...del, [prop]: false });
      };
      const deleteExecom = () => {
        console.log(hostname + '/api/execom/end/'+ sid);
        axios
          .post(hostname + '/api/execom/end/', sid, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('atoken'),
            },
        })
        .then(response => {
          if (response.data.ok === true) setDel({ ...del, success: true });
          else setDel({ ...del, error: true });
        })
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.error(error.response);
          setDel({ ...del, error: true });
        });
      }
    
  return(
    <>
    <Grid container spacing={2} justifyContent="center">
    {exelist.map(member => (
        <Grid item xs={12} md={4}>
            <Avatar name={member.name} 
            position={member.position} 
            src={member.image} />
        </Grid>
        ))}
    </Grid>
    {loggedIn && (
        <>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} container justifyContent="center" alignItems="center">
        <Tooltip title="Add Execom" arrow placement="top" aria-label="add-execom-tooltip">
            <span>
            <Fab onClick={handleDialogOpen} aria-label="addExecom" className={classes.fab}>
              <Add />
            </Fab>
            </span>
        </Tooltip>
        <AddExecomDialog onClose={handleDialogClose} aria-label="add-execom-dialog" open={dialog} sid={sid}/>
        </Grid>
        <Grid item xs={6} container justifyContent="center" alignItems="center">
        <Tooltip title="End Tenure" arrow placement="top" aria-label="end-tenure-execom-tooltip">
            <span>
            <Fab onClick={handleEndTenureClickOpen} aria-label="endTenureOfExecom" className={classes.fab}>
            <School />
            </Fab>
            </span>
        </Tooltip>
        <ConfirmEndTenureDialog 
        onClose={handleEndTenureClose} 
        aria-label="end-tenure-execom-dialog" 
        open={openEndTenureDialog} 
        sid={sid} 
        endTenureState={endTenureState}
        onEndTenureStateChange={handleEndTenureStateChange}
        />
        </Grid>
        </Grid>
        </>
      )}
    <Snackbar open={del.error} autoHideDuration={6000} onClose={handleClose('error')}>
    <Alert elevation={6} variant="filled" onClose={handleClose('error')} severity="error">
      An error occurred , please try again
    </Alert>
  </Snackbar>
  <Snackbar open={del.success} autoHideDuration={6000} onClose={handleClose('success')}>
    <Alert elevation={6} variant="filled" onClose={handleClose('success')} severity="success">
      Successfully ended tenure of current execom
    </Alert>
  </Snackbar>
  </>
  );

};