import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

 let theme = createMuiTheme();
// theme.typography.h5 = {
//   fontSize: '1.2rem',
//   '@media (min-width:700px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };
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
    paddingTop: "56.25%" // 16:9
  },
  name: {
    color: "#006341",
    fontWeight: "bold",
    fontFamily: "Formata"
  },
  post: {
    color: "#658D1B",
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

export default function AvatarCard() {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.content}>
        <Avatar
          alt="First_Name Last_Name"
          src="../../assets/images/avatar_demo.jpg"
          className={classes.large}
        />
        <br />
        <ThemeProvider theme={theme}>
          <Typography className={classes.name} variant="h5">
            Name
          </Typography>
        </ThemeProvider>
        <Typography className={classes.post} variant="h6">
          Position, Society Name/ IEEE RVCE SB
        </Typography>
      </CardContent>
    </Card>
  );
}
