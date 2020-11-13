import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div className="main-menu ">
      <nav>
        <ul>
          <li>
            <Link to="/">
              Brand New
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Bossy
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Babe
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Basics
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Back In Stock
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Body
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Bathe
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link to="/">
              Sale
              <span></span>
              <i className="fa fa-angle-down" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
