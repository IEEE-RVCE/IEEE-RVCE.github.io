import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: theme.spacing(2)
  },
  content: {
    margin: "auto",
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  name: {
    fontWeight: "bold",
    fontFamily: "Formata"
  },
  post: {
    fontFamily: "Cambria"
  },
 
  avatar: {
    backgroundColor: red[500]
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto"
  },
  small:{
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "auto"
  }
}));

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
