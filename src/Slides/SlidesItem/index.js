import React from "react";
import { Carousel } from "react-bootstrap";
import "../Slides.css";

export default function SlidesItem({image, alt, caption, caption2}) {
  return (
    <div className="slideItem">
      <img className="d-block w-50" src={image} alt={alt} />
      <Carousel.Caption>
        <p>{caption}</p>
      </Carousel.Caption>
    </div>
  );
}
