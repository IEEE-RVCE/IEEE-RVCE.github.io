import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardContent, Avatar, Typography}  from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(2)
  },
  content: {
    margin: "auto",
    textAlign: "center"
  },
  name: {
    fontWeight: "bold",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto"
  },
}));

/**
 * Avatar card
 * @param {{name:string,src:string,position:string}} props 
 */
export default function AvatarCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Avatar
          alt={props.name}
          src={props.src}
          className={classes.large}
        />
        <br />
        <ThemeProvider theme={theme}>
          <Typography className={classes.name} variant="h5">
            {props.name}
          </Typography>
        </ThemeProvider>
        <Typography className={classes.post} variant="h6">
          {props.position}
        </Typography>
      </CardContent>
    </Card>
  );
}
