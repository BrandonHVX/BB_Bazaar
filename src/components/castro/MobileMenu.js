import React, { Component } from "react";
import { Link } from "gatsby";

class MobileMenu extends Component {
  state = {
    active: false
  };

  toggleMobileMenu = () => {
    this.setState({
      active: !this.state.active
    });
  };

  componentDidMount() {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }

  render() {
    return (
      <div>
        {/*=======  offcanvas mobile menu  =======*/}
        <div
          className={`offcanvas-mobile-menu ${
            this.state.active ? "active" : ""
          } `}
          id="mobile-menu-overlay"
        >
          <button
            className="offcanvas-menu-close"
            id="mobile-menu-close-trigger"
            onClick={this.toggleMobileMenu}
          >
            <i className="pe-7s-close">x</i>
          </button>

          <div className="offcanvas-wrapper">
            <div className="offcanvas-inner-content">
              <div className="offcanvas-mobile-search-area">
                <form action="#">
                  <input type="search" placeholder="Search ..." />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <nav className="offcanvas-navigation" id="offcanvas-navigation">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/brand-new">BRAND NEW</Link>
                  </li>
                  <li>
                    <Link to="/back-in-stock">BACK IN STOCK</Link>
                  </li>
                  <li>
                    <Link to="/bossy">BOSSY</Link>
                  </li>
                  <li>
                    <Link to="/babe">BABE</Link>
                  </li>
                  <li>
                    <Link to="/bathe">BATHE</Link>
                  </li>
                  <li>
                    <Link to="/body">BODY</Link>
                  </li>
                  <li>
                    <Link to="/sale">SALE</Link>{" "}
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-widget-area">
                <div className="off-canvas-contact-widget">
                  <div className="header-contact-info">
                    <ul className="header-contact-info__list">
                      <li>
                        <i className="ion-android-mail" />{" "}
                        <a href="mailto:info@yourdomain.com">
                          bibisbazaar@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Off Canvas Widget Social Start*/}
                <div className="off-canvas-widget-social">
                  <a href="#/" title="Facebook">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#/" title="Twitter">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#/" title="LinkedIn">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#/" title="Youtube">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a href="#/" title="Vimeo">
                    <i className="fa fa-vimeo-square" />
                  </a>
                </div>
                {/*Off Canvas Widget Social End*/}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
    );
  }
}

export default MobileMenu;
