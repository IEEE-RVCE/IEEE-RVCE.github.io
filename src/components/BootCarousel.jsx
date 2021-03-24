import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
// import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  bordered:{
    borderRadius:'3px'
  }
}));
/**
 * 
 * @param {{images:{src:string}[]}} props 
 * @returns 
 */
export default function BootCarousel(props) {
  const classes = useStyles();
  console.log('img',props);
  return (
    <Carousel 
      indicators={false}
      interval={5000}
      controls={false}
      className={classes.bordered}
    >
      {props.images.map((img) => {
        return (
          <Carousel.Item>
            <img className={classes.bordered}  width="100%" alt="" src={img.src} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
