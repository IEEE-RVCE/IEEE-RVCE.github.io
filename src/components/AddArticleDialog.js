import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Slide,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Close } from '@material-ui/icons';
import EditArticle from './EditArticle';
import { ecats, hostname } from '../links';
import axios from 'axios';
import { convertDatesinValuestoUTC } from '../utils';

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

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    ...theme.appbar,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    minHeight: window.innerHeight * 0.93,
  },
  fields: {
    padding: theme.spacing(1),
  },
  deets: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddArticleDialog = props => {
  const classes = useStyles();
  const [values, setValues] = useState({
    sid: 1,
    ecat: '',
    author: '',
    adate: new Date().toDatetimeLocal(),
    title: '',
    content: {},
    keywords: '',
  });

  useEffect(() => {
    if (props.data !== undefined) {
      setValues({
        ...props.data,
      });
    }
  }, [props.data]);

  const [meta, setMeta] = useState({
    error: false,
    success: false,
  });

  const handleContentChange = content => {
    console.log(content);
    setValues({
      ...values,
      content: content,
    });
  };

  const handleChange = prop => event => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const requestData = convertDatesinValuestoUTC(values, ['adate']);
    if (props.edit === true) {
      axios
        .put(hostname + '/api/article/' + props.data.arid, requestData, {
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
          console.error(error.response);
          setMeta({ ...meta, error: true });
        });
    } else {
      axios
        .post(hostname + '/api/article', requestData, {
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
          console.error(error.response);
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
    <Dialog fullScreen open={props.open} onClose={props.onClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.edit ? 'Edit article' : 'Add article'}
          </Typography>
          <Button onClick={handleSubmit} autoFocus color="inherit">
            Submit
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <div className={classes.deets}>
          <div className={classes.fields}>
            <TextField
              id="article-title"
              variant="outlined"
              label="Title"
              type="text"
              placeholder="Enter title of article"
              value={values.title}
              onChange={handleChange('title')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <TextField
              id="article-author"
              variant="outlined"
              label="Author"
              type="text"
              placeholder="Enter author of article"
              value={values.author}
              onChange={handleChange('author')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <TextField
              id="article-keywords"
              variant="outlined"
              label="Keywords"
              type="text"
              placeholder="Enter keywords of article"
              value={values.keywords}
              onChange={handleChange('keywords')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.fields}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="ecat-select-label">Society or Affinity</InputLabel>
              <Select
                labelId="ecat-select-label"
                id="ecat-select"
                value={values.ecat}
                onChange={handleChange('ecat')}
                style={{ minWidth: '200px' }}
              >
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
        </div>
        <EditArticle
          readOnly={false}
          edit={props.edit}
          editorContent={props.edit ? props.data.content : undefined}
          onChange={handleContentChange}
        />
      </div>
      <Snackbar open={meta.error} autoHideDuration={6000} onClose={handleClose('error')}>
        <Alert elevation={6} variant="filled" onClose={handleClose('error')} severity="error">
          {props.edit ? 'An error occurred while editing an article' : 'An error occurred while adding article'}
        </Alert>
      </Snackbar>
      <Snackbar open={meta.success} autoHideDuration={6000} onClose={handleClose('success')}>
        <Alert elevation={6} variant="filled" onClose={handleClose('success')} severity="success">
          {props.edit ? 'Article edited successfully' : 'Article added successfully'}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};
