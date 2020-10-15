import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";  
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '&:hover': {
      boxShadow: "20px 20px 20px 0px rgba(0, 0, 0, 0.64)",
      marginLeft: "-3px",
      marginTop: "-2px",
      transitionDuration: 200
   },
   
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Shows snackbar with message and copies link in '' for user
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText("Copy this text to clipboard");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root} style={{cursor: "pointer"}}>
        <CardHeader
          title="Workshop on Machine Learning on Distributed Systems Platform"
          subheader="27-07-2020 to 31-07-2020"
        />
        <CardMedia
          className={classes.media}
          image="https://www.uktech.news/wp-content/uploads/2020/02/shutterstock_1384554629-898x505.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Keywords: ML, HPCC, Distributed Platform
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" onClick={handleClick}>
            Share
          </Button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Link Copied!
            </Alert>
          </Snackbar>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
