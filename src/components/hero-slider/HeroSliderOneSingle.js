import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import BG from "../../images/bg-image.jpg";

const HeroSliderOneSingle = ({ data, sliderClassName }) => {
  return (
    <div className="single-slider slider-height-1 bg-purple">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content slider-animated-1">
              <div className="slider-btn btn-hover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderOneSingle;
