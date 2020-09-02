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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(8)
  },
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

  function validateValues(prop) {
    let re = "";
    if (prop === "ieeeid") {
      re = /\d{10}/;
      return re.test(String(prop).toLowerCase());
    } else {
      re = /.{7}.+/;
      return re.test(String(prop).toLowerCase());
    }
  }

  // Handle changes on text and updates value
  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
      [prop + "Valid"]: validateValues(event.target.value)
    });
  };

  /**
   *
   * @param {React.MouseEvent<HTMLInputElement, MouseEvent>} event
   */
  const onSubmitSignIn = (event) => {
    // Put some assertion code to submit only if
    // ids & pass are valid
    fetch("http://localhost:3000/api/auth", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: this.state.ieeeID,
        pwd: this.state.pwd
      })
    })
      .then(
        (response) => response.json(),
        (rejectionreason) => console.error
      )
      .then((user) => {
        if (user.id) {
          // To set the state of various state variables upon getting the response
          // this.state.loadUser(user)
          // this.props.onRouteChange('home');
        }
      });
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
          <Button variant="contained" color="primary" onSubmit={onSubmitSignIn}>
            Submit
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
