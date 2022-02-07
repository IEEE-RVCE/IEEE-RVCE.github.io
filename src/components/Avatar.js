import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = responsiveFontSizes(createTheme());
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      height: "100%",
      padding: theme.spacing(2),
      backgroundColor: "#00000000",
    },
    content: {
      margin: "auto",
      textAlign: "center",
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: "auto",
    },
  };
});

/**
 * Avatar card
 * @param {{name:string,src:string,position:string}} props
 */
export default function AvatarCard(props) {
  const classes = useStyles();
  console.log("I", classes);
  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.content}>
        <Avatar alt={props.name} src={props.src} className={classes.large} />
        <br />
        <ThemeProvider theme={theme}>
          <Typography variant="h5">{props.name}</Typography>
        </ThemeProvider>
        <Typography variant="h6" color="primary">
          {props.position}
        </Typography>
      </CardContent>
    </Card>
  );
}
