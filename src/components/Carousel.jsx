import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bordered: {
    borderRadius: '3px',
  },
}));
/**
 *
 * @param {{images:{src:string}[]}} props
 * @returns
 */
export default function HomeCarousel(props) {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      showThumbs={false}
      useKeyboardArrows
      stopOnHover
      showStatus={false}
      showArrows={false}
      showIndicators={false}
      className={classes.bordered}
    >
      {props.images.map(img => {
        return (
          <div>
            <img
              className={classes.bordered}
              width="100%"
              alt=""
              src={img.src}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
