import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { FPAchievementImages, whatWeDoText, FPWhatWeDoImages } from "../links";
import { makeStyles } from "@material-ui/core/styles";
import Achievements from "./Achievements";
import HomeCarousel from "./Carousel";
import AchievementsMem from "./AchievementsMem";

const useStyles = makeStyles((theme) => ({
  less: {
    padding: "1rem",
  },
  smallImage: {
    borderRadius: ".25rem",
  },
}));
export default function FrontText() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.less}
        container
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item sm={12} md={6}>
          <Typography variant="h4">What we do</Typography>
          <br />

          <Typography variant="body1" align="justify">
            {whatWeDoText}
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Box>
            <HomeCarousel images={FPWhatWeDoImages} />
          </Box>
        </Grid>
      </Grid>
      <br />
      <Grid
        className={classes.less}
        direction="row-reverse"
        container
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item sm={12} md={6}>
          <Typography variant="h4">Awards Recived by Student Branch</Typography>
          <br />
          <Typography variant="body1">
            <Achievements />
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Box>
            <HomeCarousel images={FPAchievementImages.slice(0, 4)} />
          </Box>
        </Grid>
        <Grid
          className={classes.less}
          direction="row-reverse"
          container
          justify="space-around"
          alignItems="center"
          spacing={2}
        >
          <Grid item sm={12} md={6}>
            <Box>
              <HomeCarousel images={FPAchievementImages.slice(4, 8)} />
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Typography variant="h4">Awards Recived by Members</Typography>
            <br />
            <Typography variant="body1">
              <AchievementsMem />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
