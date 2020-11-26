import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../data/feature-icons/feature-icon.json";
import FeatureIconSingle from "./FeatureIconSingle";
import SupportOne from "../images/support-1.png";
import SupportTwo from "../images/support-2.png";
import SupportThree from "../images/support-3.png";
import SupportFour from "../images/support-3.png";

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div class="support-area mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img class="animated" src={SupportOne} alt="" />
              </div>
              <div class="support-content">
                <h5>Free Shipping</h5>
                <p>Orders Over $75</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img class="animated" src={SupportTwo} alt="" />
              </div>
              <div class="support-content">
                <h5>Support 24/7</h5>
                <p>Quality Customer Service </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img class="animated" src={SupportThree} alt="" />
              </div>
              <div class="support-content">
                <h5>No Returns</h5>
                <p>No Refunds or Refunds</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img class="animated" src={SupportFour} alt="" />
              </div>
              <div class="support-content">
                <h5>Products Discount</h5>
                <p>On Selected Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIcon;
