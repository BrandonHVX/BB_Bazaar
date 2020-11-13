import React, { useState } from "react";
import { Link } from "gatsby";
import LogoBlack from "../images/primarylogo_white.png";
import HeaderTop from "./Header";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
// Components

const links = [
  {
    title: "Home",
    path: "/intro"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Resume",
    path: "/resume"
  },
  {
    title: "Service",
    path: "/service"
  },
  {
    title: "Portfolio",
    path: "/portfolio"
  },
  {
    title: "Blog",
    path: "/blog"
  },
  {
    title: "Testimonial",
    path: "/testimonial"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

function Navi() {
  const [displaySidenav, setDisplaySidenav] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setDisplaySidenav(!displaySidenav);
  };

  return (
    <>
      {/* <HeaderTop /> */}
      <nav class="unslate_co--site-nav site-nav-target">
        <div class="container">
          <div class="row align-items-center justify-content-between text-left">
            <div class="col-md-5 text-right">
              <ul class="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li class="has-children">
                  <Link class="nav-link" to="/brand-new">
                    BRAND NEW
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/back-in-stock">
                    BOSSY
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/back-in-stock">
                    BABE
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/bossy">
                    BASICS
                  </Link>
                </li>
              </ul>
            </div>
            <div class="site-logo pos-absolute">
              <a href="index.html" class="unslate_co--site-logo">
                <img src={LogoBlack} width={170} />
              </a>
            </div>
            <div class="col-md-5 text-right text-lg-left">
              <ul class="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li>
                  <Link class="nav-link" to="/bossy">
                    BACK IN STOCK
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/bossy">
                    BODY
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/bossy">
                    BATHE
                  </Link>
                </li>
                <li>
                  <Link class="nav-link" to="/bossy">
                    SALE
                  </Link>
                </li>
              </ul>
              <ul class="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                <li>
                  <a href="#" class="js-menu-toggle">
                    Menu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navi;
