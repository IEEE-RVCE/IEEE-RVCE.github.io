import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ecats, hostname } from '../links';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '30%',
  },
  button: theme.button,
  formControl: {
    minWidth: 240,
  },
  fields: {
    padding: theme.spacing(1),
  },
}));

export const AddImageDialog = props => {
  const classes = useStyles();

  // Textfields related
  const [values, setValues] = useState({
    ecat: '',
    image: new Uint8Array(),
    alt: '',
    sid: 1,
  });

  useEffect(() => {
    if (props.data !== undefined && props.edit) {
      setValues({
        ...props.data,
      });
    }
  }, [props]);

  const handleChange = prop => event => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handleFileChange = event => {
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(imageFile);
    reader.onload = () => {
      setValues({
        ...values,
        image: { type: 'Buffer', data: [...new Uint8Array(reader.result)] },
      });
      console.log({ type: 'Buffer', data: [...new Uint8Array(reader.result)] });
    };
  };

  const [meta, setMeta] = useState({
    error: false,
    success: false,
  });

  const submitData = () => {
    console.log(values);
    props.onClose();
    if (props.edit === true) {
      axios
        .put(hostname + '/api/gallery/' + props.data.iid, values, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('atoken'),
          },
        })
        .then(response => {
          if (response.data.ok === true) setMeta({ ...meta, success: true });
          else setMeta({ ...meta, error: true });
        })
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.error(error.response.data.status);
          setMeta({ ...meta, error: true });
        });
    } else {
      axios
        .post(hostname + '/api/gallery', values, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('atoken'),
          },
        })
        .then(response => {
          if (response.data.ok === true) setMeta({ ...meta, success: true });
          else setMeta({ ...meta, error: true });
        })
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.error(error.response.data.status);
          setMeta({ ...meta, error: true });
        });
    }
  };

  // Handle closing of snackbars
  const handleClose = prop => (event, reason) => {
    if (reason === 'clickaway') return;
    setMeta({ ...meta, [prop]: false });
  };

  return (
    <>
      <Dialog onClose={props.onClose} open={props.open} className={classes.root}>
        <DialogTitle>Add image to gallery</DialogTitle>
        <DialogContent>
          <DialogContentText>Add image details here to be shown in the gallery</DialogContentText>
          <div className={classes.fields}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="ecat-select-label">Society or Affinity</InputLabel>
              <Select labelId="ecat-select-label" id="ecat-select" value={values.ecat} onChange={handleChange('ecat')}>
                <MenuItem value={ecats.compsoc}>Computer Society</MenuItem>
                <MenuItem value={ecats.comsoc}>Communication Society</MenuItem>
                <MenuItem value={ecats.aps}>Antenna Propogation Society</MenuItem>
                <MenuItem value={ecats.sps}>Signal Processing Society</MenuItem>
                <MenuItem value={ecats.pes}>Power and Energy Society</MenuItem>
                <MenuItem value={ecats.ras}>Robotic and Automation Society</MenuItem>
                <MenuItem value={ecats.mtts}>Microwave Theory and Technology Society</MenuItem>
                <MenuItem value={ecats.aess}>Aerospace and Electronic Systems Society</MenuItem>
                <MenuItem value={ecats.sight}>Special Interest Group on Humanitarian Technology</MenuItem>
                <MenuItem value={ecats.wie}>Women in Engineering</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.fields}>
            <TextField
              id="img-input"
              label="Upload Image"
              type="file"
              placeholder="Upload PNG Image"
              variant="outlined"
              onChange={handleFileChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          {/* <div className={classes.fields}>
                        <TextField
                            id="imagelink"
                            label="Image link"
                            type="text"
                            placeholder="Enter link of image to show"
                            variant="outlined"
                            value={values.image}
                            onChange={handleChange('image')}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </div> */}
          <div className={classes.fields}>
            <TextField
              id="alt"
              label="Alternate title"
              type="text"
              placeholder="Enter alternate title of image"
              variant="outlined"
              value={values.alt}
              onChange={handleChange('alt')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitData} className={classes.button}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={meta.error} autoHideDuration={6000} onClose={handleClose('error')}>
        <Alert elevation={6} variant="filled" onClose={handleClose('error')} severity="error">
          {props.edit ? 'An error occurred while updating an image' : 'An error occurred while adding image'}
        </Alert>
      </Snackbar>
      <Snackbar open={meta.success} autoHideDuration={6000} onClose={handleClose('success')}>
        <Alert elevation={6} variant="filled" onClose={handleClose('success')} severity="success">
          {props.edit ? 'Image updated successfully' : 'Image added successfully'}
        </Alert>
      </Snackbar>
    </>
  );
};
