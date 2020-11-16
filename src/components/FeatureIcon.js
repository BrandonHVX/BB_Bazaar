import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../data/feature-icons/feature-icon.json";
import FeatureIconSingle from "./FeatureIconSingle";

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div class="support-area pt-100 pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src="/assets/img/icon-img/support-1.png"
                  alt=""
                />
              </div>
              <div class="support-content">
                <h5>Free Shipping</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src="/assets/img/icon-img/support-2.png"
                  alt=""
                />
              </div>
              <div class="support-content">
                <h5>Support 24/7</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src="/assets/img/icon-img/support-3.png"
                  alt=""
                />
              </div>
              <div class="support-content">
                <h5>Money Return</h5>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="support-wrap mb-30">
              <div class="support-icon">
                <img
                  class="animated"
                  src="/assets/img/icon-img/support-4.png"
                  alt=""
                />
              </div>
              <div class="support-content">
                <h5>Order Discount</h5>
                <p>Free shipping on all order</p>
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
