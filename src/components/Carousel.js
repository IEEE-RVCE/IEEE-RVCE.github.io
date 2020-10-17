import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function HomeCarousel(props) {
  return (
    <Carousel 
      autoPlay
      infiniteLoop
      showThumbs={false}
      useKeyboardArrows
      stopOnHover
      showStatus={false}
      showIndicators={false}
    >
      {props.images.map((img) => {
        return (
          <div>
            <img alt="" src={img.src} />
            <p className="legend">{img.label}</p>
          </div>
        );
      })}
    </Carousel>
  );
}
