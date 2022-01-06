import React, { Component } from "react";
import Slider from "react-slick";


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src={"/abstract01.jpg"} alt="pic1" />
          </div>
          <div>
            <img src={"/abstract02.jpg"} alt="pic2" />
          </div>
          <div>
            <img src={"/abstract03.jpg"} alt="pic2" />
          </div>
          <div>
            <img src={"/abstract04.jpg"} alt="pic2" />
          </div>
        </Slider>
      </div>
    );
  }
}