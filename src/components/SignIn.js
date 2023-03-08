import React from 'react';
import {
  Paper,
  TextField,
  Container,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';
import { hostname } from '../links';

const useStyles = makeStyles(theme => ({
  root: theme.root,
  container: {
    ...theme.page,
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
  paper: {
    ...theme.paper,
    padding: theme.spacing(8),
  },
  button: theme.button,
  backdrop: {
    zIndex: 100,
    color: '#fff',
  },
}));

export default function Signin() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    ieeeid: '',
    password: '',
    ieeeidValid: true,
    passwordValid: true,
    showPassword: false,
    authFail: false,
    networkError: false,
    incorrectInfo: false,
  });

  //Backdrop state
  const [backdrop, setBackdrop] = React.useState(false);

  //Rickroll state
  const [rickroll, setRickroll] = React.useState(0);

  function validateValues(prop, value) {
    if (prop === 'ieeeid') {
      const re = /^\d{8}$/;
      return re.test(String(value).toLowerCase());
    } else {
      const re = /^.{8,}$/;
      return re.test(String(value).toLowerCase());
    }
  }

  // Handle changes on text and updates value
  const handleChange = prop => event => {
    setValues({
      ...values,
      [prop]: event.target.value,
      [prop + 'Valid']: validateValues(prop, event.target.value),
    });
  };

  /**
   *
   * @param {React.MouseEvent<HTMLInputElement, MouseEvent>} event
   */
  const onSubmitSignIn = async event => {
    setBackdrop(true);
    if (values.ieeeidValid && values.passwordValid) {
      try {
        const res = await axios.post(hostname + '/api/auth', {
          uid: values.ieeeid,
          pwd: values.password,
        });
        if (res.data.ok === true && res.data.auth === true) {
          localStorage.setItem('atoken', res.data.atoken);
          localStorage.setItem('isAuthenticated', true);
          window.location.replace(window.location.origin);
        } else {
          setValues({
            ...values,
            ieeeidValid: false,
            passwordValid: false,
            authFail: true,
          });
          setRickroll(1);
          setBackdrop(false);
        }
      } catch (err) {
        console.log(`Axios request failed: ${err}`);
        if (err.status === 401) {
          setValues({
            ...values,
            ieeeidValid: false,
            passwordValid: false,
            authFail: true,
          });
          setRickroll(1);
          setBackdrop(false);
        } else {
          setValues({
            ...values,
            ieeeidValid: false,
            passwordValid: false,
            networkError: true,
          });
          setRickroll(1);
          setBackdrop(false);
        }
      }
    } else {
      setValues({
        ...values,
        incorrectInfo: !values.ieeeidValid && !values.passwordValid,
      });
      setBackdrop(false);
    }
  };

  // Handling show and hide password
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // So that the usual mouse down activity doesn't happen
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // Handle closing of snackbars
  const handleClose = prop => (event, reason) => {
    if (reason === 'clickaway') return;
    setValues({ ...values, [prop]: false });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <iframe
          title="Rickrolled"
          style={{ display: 'none' }}
          width="640"
          height="480"
          src={'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=' + rickroll}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Paper className={classes.paper}>
          <Typography variant="h4">Sign in</Typography>
          <br />
          <div>
            <TextField
              id="ieeeid"
              label="IEEE ID"
              type="number"
              placeholder="Enter your IEEE ID"
              variant="outlined"
              fullWidth
              error={!values.ieeeidValid}
              onChange={handleChange('ieeeid')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <br />
          <div>
            <TextField
              id="standard-adornment-password"
              label="Password"
              placeholder="Enter your password"
              error={!values.passwordValid}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              variant="outlined"
              onChange={handleChange('password')}
            />
          </div>
          <br />
          <Snackbar
            open={values.incorrectInfo}
            autoHideDuration={6000}
            onClose={handleClose('incorrectInfo')}
          >
            <Alert
              elevation={6}
              variant="filled"
              onClose={handleClose('incorrectInfo')}
              severity="error"
            >
              Incorrect Information entered
            </Alert>
          </Snackbar>
          <Snackbar
            open={values.authFail}
            autoHideDuration={6000}
            onClose={handleClose('authFail')}
          >
            <Alert
              elevation={6}
              variant="filled"
              onClose={handleClose('authFail')}
              severity="error"
            >
              Invalid username or password
            </Alert>
          </Snackbar>
          <Snackbar
            open={values.networkError}
            autoHideDuration={6000}
            onClose={handleClose('networkError')}
          >
            <Alert
              elevation={6}
              variant="filled"
              onClose={handleClose('networkError')}
              severity="error"
            >
              Failed connecting to server
            </Alert>
          </Snackbar>
          <Backdrop className={classes.backdrop} open={backdrop}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <div>
            <Button
              color="inherit"
              className={classes.button}
              onClick={onSubmitSignIn}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
