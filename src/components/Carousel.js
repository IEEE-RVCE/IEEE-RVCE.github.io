import React from "react";
// import ReactDOM from "react-dom";// requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HomeCarousel(props) {
  return (
    <Carousel autoPlay>
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
