import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import Logo from "../images/primarylogo.png";
import FooterCopyright from "../components/footer/FooterCopyright";
import FooterNewsletter from "../components/footer/FooterNewsletter";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer class="footer-area bg-gray pt-100 pb-70   ">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-sm-4">
            <div class="copyright mb-30 ">
              <div class="footer-logo">
                <a href="/">
                  <img alt="" src={Logo} />
                </a>
              </div>
              <p>
                © 2020{" "}
                <a
                  href="//hasthemes.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  BiBi's Bazaar
                </a>
                .<br /> All Rights Reserved
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4">
            <div class="footer-widget mb-30 ml-30">
              <div class="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/#/">Store location</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/#/">Orders tracking</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4">
            <div class="footer-widget mb-30 ml-50">
              <div class="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a href="/#/">Returns</a>
                  </li>
                  <li>
                    <a href="/#/">Support Policy</a>
                  </li>
                  <li>
                    <a href="/#/">Size guide</a>
                  </li>
                  <li>
                    <a href="/#/">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget mb-30 ml-75">
              <div class="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div class="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="footer-widget mb-30 ml-70 ">
              <div class="footer-title">
                <h3>SUBSCRIBE</h3>
              </div>
              <div class="subscribe-style ">
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <div>
                  <div class="subscribe-form">
                    <div class="mc-form">
                      <div>
                        <input
                          id="mc-form-email"
                          class="email"
                          type="email"
                          placeholder="Enter your email address..."
                        />
                      </div>
                      <div class="clear">
                        <button class="button">SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="scroll-top show">
        <i class="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

export default FooterOne;
