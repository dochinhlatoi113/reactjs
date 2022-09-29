import React, { useState, useEffect } from "react";
import App from "../App";
import { dataFilm } from "../DB/dataFilm";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Index(props) {
  let titleIndex = "New Movies";
  let element = dataFilm.map((data) => {
    return;
  });

  return (
    <div className="carousel-container">
      <Carousel >
       { dataFilm.map((item, key) => (
        <div className="row">
        <Carousel.Item>
          
            <div className="col">
            <img
              className="d-block w-100"
              src={item.img}
              alt="First slide"
            />       
            </div>
      
      </Carousel.Item>
      </div>
        ))}
      
     
    </Carousel>
    </div>
  );
}

export default Index;
