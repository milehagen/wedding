import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slides.css";
import weddinginvite from "../weddinginvite.png";
import SlidesItem from "./SlidesItem";

export default function Slides() {
  return (
    <>
      <Carousel interval={null}>
        <Carousel.Item>
          <SlidesItem
            image={weddinginvite}
            caption={"This is a caption text"}
            alt="First Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-50"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
