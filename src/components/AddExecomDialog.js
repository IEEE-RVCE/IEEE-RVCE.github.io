import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Grid,
    Checkbox,
    OutlinedInput,
    // Typography,
  } from '@material-ui/core';
  import axios from 'axios';
  import React, { useState, useEffect } from 'react';

  import { ecats, hostname} from '../links';

  import Alert from '@material-ui/lab/Alert';
  import { CircularProgress } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
    root: {
      position: 'absolute',
      top: '30%',
    },
    formControl: {
      minWidth: 240,
    },
    fields: {
      padding: theme.spacing(1),
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'green',
        },
        '&:hover fieldset': {
          border:"2px solid",
          borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
          border: '2px solid green', 
        },
      },
    },
  }));

  //Nice prototype to convert Date objects to datetime local strings
// eslint-disable-next-line
Date.prototype.toDatetimeLocal = function toDatetimeLocal() {
  var date = this,
    ten = function (i) {
      return (i < 10 ? '0' : '') + i;
    },
    YYYY = date.getFullYear(),
    MM = ten(date.getMonth() + 1),
    DD = ten(date.getDate()),
    HH = ten(date.getHours()),
    II = ten(date.getMinutes()),
    SS = ten(date.getSeconds());
  return YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + II + ':' + SS;
};
  export const AddExecomDialog = props => {
    const classes = useStyles();
  
    // Textfields related
    const [values, setValues] = useState({
      firstname: '',
      lastname: '',
      position:'',
      sid:'',
      tenureStart:new Date().toDatetimeLocal(),
      tenureEnd: '',
      imagepath:'',
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (props.data !== undefined) {
        console.log("data")
        setValues({
          ...props.data,
          tenureStart: props.data.tenureStart.toDatetimeLocal(),
          tenureEnd: props.data.tenureEnd.toDatetimeLocal(),
        });
      }
    }, [props.data]);
  

    const handleFileInput = async file => {
      const data = new FormData();
      data.append('image', file);
      try {
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`, data);
        setValues({
          ...values,
          imagepath: res.data.data.display_url,
        });
        setLoading(v => !v);
      } catch (err) {
        console.log(err);
        setLoading(v => !v);
      }
    };
  
    const handleChange = prop => event => {
      setValues({
        ...values,
        [prop]: event.target.value,
      });
    };
  
    const [meta, setMeta] = useState({
      error: false,
      success: false,
    });

    const submitData = (e) => {
      e.preventDefault();
      props.onClose();
      console.log(values);
      // if (props.edit === true) {
      //   axios
      //     .put(hostname + '/api/event/' + props.data.eid, values, {
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer ' + localStorage.getItem('atoken'),
      //       },
      //     })
      //     .then(response => {
      //       if (response.data.ok === true) setMeta({ ...meta, success: true });
      //       else setMeta({ ...meta, error: true });
      //     })
      //     .then(() => {
      //       window.location.reload();
      //     })
      //     .catch(error => {
      //       console.error(error.response);
      //       setMeta({ ...meta, error: true });
      //     });
      // } else {
      //   axios
      //     .post(hostname + '/api/execom', values, {
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer ' + localStorage.getItem('atoken'),
      //       },
      //     })
      //     .then(response => {
      //       if (response.data.ok === true) setMeta({ ...meta, success: true });
      //       else setMeta({ ...meta, error: true });
      //     })
      //     .then(() => {
      //       window.location.reload();
      //     })
      //     .catch(error => {
      //       console.error(error.response);
      //       setMeta({ ...meta, error: true });
      //     });
      // }
    };
  
    // Handle closing of snackbars
    const handleClose = prop => (event, reason) => {
      if (reason === 'clickaway') return;
      setMeta({ ...meta, [prop]: false });
    };
      
    const [isCurrent,setIsCurrent] = useState(true);
    const handleEndTenure = event => {
      setIsCurrent(event.target.checked);
    };

    return (
      <>
        <Dialog onClose={props.onClose} open={props.open} className={classes.root}>
          <DialogTitle className={classes.textHead}>Add Execom</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add execom details. Abide by the datatypes used in the form and use
              submit button to add the execom.
            </DialogContentText>
            <Grid container spacing={2}>
            <Grid item xs={6}  className={classes.fields}>
              <TextField
                id="firstname"
                label="First Name"
                type="text"
                required
                placeholder="Enter first name"
                variant="outlined"
                value={values.firstname}
                onChange={handleChange('firstname')}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{maxLength:50,inputComponent: OutlinedInput,inputProps: {style: {borderColor: 'red',},},}}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}  className={classes.fields}>
              <TextField
                id="lastname"
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                variant="outlined"
                value={values.lastname}
                onChange={handleChange('lastname')}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ maxLength: 50 }}
                fullWidth
              />
           </Grid>
            
            <Grid  item xs={12} className={classes.fields}>
              <FormControl variant="outlined" fullWidth required className={classes.formControl}>
                <InputLabel id="sid-select-label">Society or Affinity</InputLabel>
                <Select labelId="sid-select-label" id="sid-select" value={values.sid} onChange={handleChange('sid')}>
                  <MenuItem value={ecats.main}>Main Execom</MenuItem>
                  <MenuItem value={ecats.compsoc}>Computer Society</MenuItem>
                  <MenuItem value={ecats.comsoc}>Communication Society</MenuItem>
                  <MenuItem value={ecats.aps}>Antenna Propogation Society</MenuItem>
                  <MenuItem value={ecats.sps}>Signal Processing Society</MenuItem>
                  <MenuItem value={ecats.pes}>Power and Energy Society</MenuItem>
                  <MenuItem value={ecats.ras}>Robotic and Automation Society</MenuItem>
                  <MenuItem value={ecats.cas}>Circuits and Systems Society</MenuItem>
                  <MenuItem value={ecats.sc}>Sensors Council</MenuItem>
                  <MenuItem value={ecats.sight}>Special Interest Group on Humanitarian Technology</MenuItem>
                  <MenuItem value={ecats.wie}>Women in Engineering</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid  item xs={12} className={classes.fields}>
              <FormControl variant="outlined" fullWidth required className={classes.formControl}>
                <InputLabel id="pos-select-label">Designation</InputLabel>
                <Select labelId="pos-select-label" id="pos-select" value={values.position} onChange={handleChange('position')}>
                  <MenuItem value="Faculty Advisor">Faculty Advisor</MenuItem>
                  <MenuItem value="Chair">Chair</MenuItem>
                  <MenuItem value="Vice Chair">Vice Chair</MenuItem>
                  <MenuItem value="Joint Secretary">Joint Secretary</MenuItem>
                  <MenuItem value="Treasurer">Treasurer</MenuItem>
                  <MenuItem value="Branch Counselor">Branch Counselor</MenuItem>
                  <MenuItem value="Webmaster">Webmaster</MenuItem>
                  <MenuItem value="Social Media Head">Social Media Head</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.fields}>
              <TextField
                id="tenureStart"
                label="Tenure start date"
                type="datetime-local"
                variant="outlined"
                fullWidth
                required
                defaultValue={new Date().toDatetimeLocal}
                value={values.tenureStart}
                onChange={handleChange('tenureStart')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <FormControlLabel
                control={
                  <Checkbox
                    checked={isCurrent}
                    onChange={handleEndTenure}
                    name='isCurrent'
                    color='secondary'
                  />
                }
                label="Is the member currently serving in the Execom?"
              />
              {!isCurrent && (
                <Grid item xs={12} className={classes.fields}>
                <TextField
                id="tenureEnd"
                label="Tenure end date"
                type="datetime-local"
                variant="outlined"
                defaultValue={new Date().toDatetimeLocal()}
                value={values.tenureEnd}
                fullWidth
                onChange={handleChange('tenureEnd')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
                </Grid>
              )}
            {!loading ? (
              <Grid  item xs={12} className={classes.fields}>
                <Button variant="contained" component="label">
                  Upload Photo
                  <input
                    type="file"
                    hidden
                    onChange={async e => {
                      setLoading(v => !v);
                      const file = e.target.files[0];
                      await handleFileInput(file);
                    }}
                  />
                </Button>
                {values.imagepath !== '' ? (
                  <div
                    style={{
                      padding: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={values.imagepath} alt="execomimage" width="100" height="100" />
                  </div>
                ) : null}
              </Grid>
            ) : (
              <div className={classes.fields}>
                <CircularProgress />
              </div>
            )}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={submitData} className={classes.button}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar open={meta.error} autoHideDuration={6000} onClose={handleClose('error')}>
          <Alert elevation={6} variant="filled" onClose={handleClose('error')} severity="error">
            {props.edit ? 'An error occurred while editing an execom' : 'An error occurred while adding execom'}
          </Alert>
        </Snackbar>
        <Snackbar open={meta.success} autoHideDuration={6000} onClose={handleClose('success')}>
          <Alert elevation={6} variant="filled" onClose={handleClose('success')} severity="success">
            {props.edit ? 'Execom details edited successfully' : 'Execom details added successfully'}
          </Alert>
        </Snackbar>
      </>
    );
  };
  