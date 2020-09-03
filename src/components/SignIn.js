import React from "react";
import {
  Paper,
  TextField,
  Container,
  Typography,
  InputAdornment,
  IconButton,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(8)
  },
  button: {
    color: "#00629B",
  }
}));

export default function Signin() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    ieeeid: "",
    password: "",
    ieeeidValid: true,
    passwordValid: true,
    showPassword: false
  });

  function validateValues(prop, value) {
    console.log(prop)
    if (prop === "ieeeid") {
      const re = /^\d{10}$/;
      return re.test(String(value).toLowerCase());
    } else {
      const re = /^.{8,}$/;
      return re.test(String(value).toLowerCase());
    }
  }

  // Handle changes on text and updates value
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
      [prop + "Valid"]: validateValues(prop, event.target.value)
    });
  };

  /**
   *
   * @param {React.MouseEvent<HTMLInputElement, MouseEvent>} event
   */
  const onSubmitSignIn = async (event) => {
    await axios.post("http://localhost:3000/api/auth", {
      uid: values.ieeeid,
      pwd: values.password
    })
    .then(res => {
      if(res.data.ok === true && res.data.auth === true)
      {
        localStorage.setItem('atoken', res.data.atoken)
      }
      else {
        setValues({...values, ieeeidValid: false, passwordValid: false})
        throw console.error('Failed on authentication');
      }
    })
    .catch(err => {
      console.error(`Axios request failed: ${err}`)
    })
  };

  // Handling show and hide password
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // So that the usual mouse down activity doesn't happen
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
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
            onChange={handleChange("ieeeid")}
            InputLabelProps={{
              shrink: true
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
              shrink: true
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
              )
            }}
            fullWidth
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            variant="outlined"
            onChange={handleChange("password")}
          />
        </div>
        <br />
        <div>
          <Button variant="outlined" color="inherit" className={classes.button} onSubmit={onSubmitSignIn}>
            Submit
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
